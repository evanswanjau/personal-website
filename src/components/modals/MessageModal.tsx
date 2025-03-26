import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState, FormEvent, useRef } from "react";
import { toast } from "sonner";
import { DialogTitle } from "@radix-ui/react-dialog";
import ReCAPTCHA from "react-google-recaptcha";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

interface MessageModalProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const MessageModal = ({
  isDialogOpen,
  setIsDialogOpen,
}: MessageModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.email || !formData.name || !formData.message) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS configuration is missing");
      }

      const token = await recaptchaRef.current?.executeAsync();
      if (!token) {
        throw new Error("reCAPTCHA verification failed");
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          "g-recaptcha-response": token, 
        },
        EMAILJS_PUBLIC_KEY
      );

      // Reset reCAPTCHA after submission
      recaptchaRef.current?.reset();

      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" });
        setIsDialogOpen(false);

        toast.success("Message sent successfully!", {
          description:
            "Thank you for reaching out. I will get back to you soon.",
          duration: 5000,
        });
      } else {
        throw new Error(`EmailJS responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);

      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      toast.error("Failed to send message", {
        description: `${errorMessage}. Please try again or contact me through my socials.`,
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-100 transition-colors rounded-full px-4"
        >
          <FaEnvelope className="text-gray-800" /> Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white p-8 rounded-xl shadow-lg w-11/12 max-w-md border border-gray-200">
        <DialogTitle className="text-2xl font-semibold text-gray-800">
          <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-3 ">
            Send me a message
          </h3>
          <p className=" mb-3 text-sm text-gray-400 font-normal">
            Have a question or want to collaborate? Fill out the form below and
            I'll get back to you as soon as possible.
          </p>
        </DialogTitle>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-800 mb-1 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
              rows={4}
              required
            />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={RECAPTCHA_SITE_KEY}
            className="hidden"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="mt-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-md py-6"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
