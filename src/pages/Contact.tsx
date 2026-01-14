import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { PageLayout } from "@/components/PageLayout";

// EmailJS Public Key
const EMAILJS_PUBLIC_KEY = "3sQt_CDIT_J4t7dTm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Building2, 
  Shield, 
  Clock,
  CheckCircle2,
  Code,
  Zap
} from "lucide-react";


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all required fields (First name, Last name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      // Prepare template parameters
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        company: formData.company || "Not provided",
        email: formData.email,
        phone: formData.phone || "Not provided",
        country: formData.country || "Not provided",
        message: formData.message,
        time: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short"
        })
      };

      console.log("Sending email with params:", templateParams);

      // Send email via EmailJS
      const response = await emailjs.send(
        "service_xfyl449", // Service ID
        "template_xtof4cg", // Template ID
        templateParams
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          country: "",
          message: ""
        });
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error: any) {
      console.error("EmailJS error details:", error);
      console.error("Full error object:", JSON.stringify(error, null, 2));
      
      const errorMsg = error?.text || error?.message || error?.toString() || "Unknown error occurred";
      console.error("Error message:", errorMsg);
      
      setSubmitStatus("error");
      
      // More specific error messages
      if (error?.text?.includes("Invalid") || error?.text?.includes("not found")) {
        setErrorMessage("Invalid service or template ID. Please verify service_xfyl449 and template_xtof4cg are correct in your EmailJS dashboard.");
      } else if (error?.text?.includes("Failed") || error?.status === 0) {
        setErrorMessage("Network error. Please check your internet connection and try again.");
      } else if (error?.text?.includes("public key") || error?.text?.includes("unauthorized")) {
        setErrorMessage("EmailJS authentication failed. You may need to add your public key. Check the browser console for details.");
      } else {
        setErrorMessage(`Error: ${errorMsg}. Check browser console (F12) for more details.`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-20 lg:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#EC0000]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#EC0000]/5 rounded-full blur-2xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                See what LumiqAI can do for Santander.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-sans leading-relaxed">
                Learn how our intelligent lending platform can transform your approval rates and deliver exceptional customer experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-24 bg-[#F7F7F7]">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              
              {/* Form */}
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 font-serif text-center">
                  Contact Sales
                </h2>
                <p className="text-lg text-[#666666] mb-10 font-sans text-center">
                  Ready to transform your lending conversion? Reach out to our sales team and we'll be in touch.
                </p>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className="h-12 px-4 bg-white border-gray-300 rounded-lg focus:border-[#EC0000] focus:ring-[#EC0000]"
                      />
                      <Input
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        className="h-12 px-4 bg-white border-gray-300 rounded-lg focus:border-[#EC0000] focus:ring-[#EC0000]"
                      />
                    </div>

                    <Input
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="h-12 px-4 bg-white border-gray-300 rounded-lg focus:border-[#EC0000] focus:ring-[#EC0000]"
                    />

                    <Input
                      type="email"
                      placeholder="Work email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="h-12 px-4 bg-white border-gray-300 rounded-lg focus:border-[#EC0000] focus:ring-[#EC0000]"
                    />

                    <Textarea
                      placeholder="What are you looking to build? Details are helpful!"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="min-h-[120px] px-4 py-3 bg-white border-gray-300 rounded-lg focus:border-[#EC0000] focus:ring-[#EC0000] resize-none"
                    />

                    <Input
                      type="tel"
                      placeholder="Phone number (optional)"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="h-12 px-4 bg-white border-gray-300 rounded-lg focus:border-[#EC0000] focus:ring-[#EC0000]"
                    />

                    <Select onValueChange={(value) => handleChange("country", value)}>
                      <SelectTrigger className="h-12 px-4 bg-white border-gray-300 rounded-lg focus:border-[#EC0000] focus:ring-[#EC0000]">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="mx">Mexico</SelectItem>
                        <SelectItem value="br">Brazil</SelectItem>
                        <SelectItem value="es">Spain</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold text-base rounded-lg flex items-center justify-between px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 text-sm font-medium text-center">
                          ✓ Thank you! Your message has been sent successfully. We'll be in touch soon.
                        </p>
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-sm font-medium text-center mb-2">
                          ✗ Something went wrong. Please try again or contact us directly.
                        </p>
                        {errorMessage && (
                          <p className="text-red-600 text-xs text-center mt-2">
                            {errorMessage}
                          </p>
                        )}
                        <p className="text-red-500 text-xs text-center mt-3">
                          Check browser console for more details.
                        </p>
                      </div>
                    )}
                  </form>

                  <p className="text-sm text-[#888888] mt-6 font-sans text-center">
                    By submitting this form, I confirm that I have read and understood LumiqAI's{" "}
                    <a href="#" className="text-[#2D2D2D] underline hover:text-[#EC0000]">Privacy Statement</a>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
              {[
                "SOC 2 Type II Certified",
                "GDPR Ready",
                "PCI-DSS Compliant",
                "99.95% Uptime SLA"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#666666]">
                  <CheckCircle2 className="w-4 h-4 text-[#EC0000]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
