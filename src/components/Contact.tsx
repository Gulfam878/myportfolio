// import { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, MapPin, Phone } from "lucide-react";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";

// const contactSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   subject: z.string().min(4, "Subject must be at least 4 characters"),
//   message: z.string().min(20, "Message must be at least 20 characters"),
// });

// type ContactForm = z.infer<typeof contactSchema>;

// const EMAIL = "gulfam.ashraf@developer.io";

// export default function Contact() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });
//   const [copied, setCopied] = useState(false);
//   const [sending, setSending] = useState(false);
//   const { toast } = useToast();

//   const form = useForm<ContactForm>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: { name: "", email: "", subject: "", message: "" },
//   });

//   const copyEmail = async () => {
//     await navigator.clipboard.writeText(EMAIL);
//     setCopied(true);
//     toast({ title: "Copied!", description: "Email address copied to clipboard." });
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const onSubmit = async (data: ContactForm) => {
//     setSending(true);
//     await new Promise((r) => setTimeout(r, 1500));
//     setSending(false);
//     form.reset();
//     toast({
//       title: "Message sent!",
//       description: "Thanks for reaching out. I'll get back to you within 24 hours.",
//     });
//   };

//   return (
//     <section id="contact" data-testid="section-contact" className="py-28 px-4 relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="max-w-6xl mx-auto relative">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm font-mono text-primary mb-2 block">// get_in_touch</span>
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contact Me</h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: 64 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
//           />
//           <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
//             Have a project in mind? Let's talk. I'm always open to new opportunities and interesting work.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-5 gap-10">
//           {/* Contact info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="lg:col-span-2 space-y-6"
//           >
//             <div className="p-6 rounded-2xl border border-border bg-card">
//               <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-primary/10 text-primary">
//                     <Mail className="w-4 h-4" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="text-xs text-muted-foreground mb-0.5">Email</div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-mono text-foreground truncate">{EMAIL}</span>
//                       <button
//                         data-testid="button-copy-email"
//                         onClick={copyEmail}
//                         className="flex-shrink-0 p-1 rounded text-muted-foreground hover:text-primary transition-colors cursor-pointer"
//                         aria-label="Copy email"
//                       >
//                         {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-primary/10 text-primary">
//                     <MapPin className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-muted-foreground mb-0.5">Location</div>
//                     <div className="text-sm text-foreground">Islamabad, Pakistan (Remote-first)</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-primary/10 text-primary">
//                     <Phone className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-muted-foreground mb-0.5">Availability</div>
//                     <div className="text-sm text-foreground">Open to freelance & full-time</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 rounded-2xl border border-border bg-card">
//               <h3 className="font-semibold text-foreground mb-4">Find Me Online</h3>
//               <div className="grid grid-cols-3 gap-3">
//                 {[
//                   { icon: Github, label: "GitHub", href: "https://github.com" },
//                   { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/gulfam-ashraf-75676a287" },
//                   { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
//                 ].map(({ icon: Icon, label, href }) => (
//                   <a
//                     key={label}
//                     data-testid={`link-contact-${label.toLowerCase()}`}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all hover:-translate-y-0.5"
//                   >
//                     <Icon className="w-5 h-5" />
//                     <span className="text-xs">{label}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-3"
//           >
//             <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors">
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//                   <div className="grid sm:grid-cols-2 gap-5">
//                     <FormField
//                       control={form.control}
//                       name="name"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Name</FormLabel>
//                           <FormControl>
//                             <Input
//                               data-testid="input-contact-name"
//                               placeholder="John Doe"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Email</FormLabel>
//                           <FormControl>
//                             <Input
//                               data-testid="input-contact-email"
//                               type="email"
//                               placeholder="john@example.com"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                   </div>

//                   <FormField
//                     control={form.control}
//                     name="subject"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Subject</FormLabel>
//                         <FormControl>
//                           <Input
//                             data-testid="input-contact-subject"
//                             placeholder="Project collaboration opportunity"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="message"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             data-testid="input-contact-message"
//                             placeholder="Tell me about your project, timeline, and budget..."
//                             rows={5}
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <Button
//                     data-testid="button-contact-submit"
//                     type="submit"
//                     disabled={sending}
//                     className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
//                   >
//                     {sending ? (
//                       <span className="flex items-center gap-2">
//                         <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                         </svg>
//                         Sending...
//                       </span>
//                     ) : (
//                       <span className="flex items-center gap-2">
//                         <Send className="w-4 h-4" />
//                         Send Message
//                       </span>
//                     )}
//                   </Button>
//                 </form>
//               </Form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }






import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Copy, Check, MapPin, Phone, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EMAIL = "gulfamashraf878@gmail.com";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast({ title: "Copied!", description: "Email address copied to clipboard." });
    setTimeout(() => setCopied(false), 2000);
  };

 const openEmailClient = () => {
  const subject = encodeURIComponent("Project Inquiry");
  const body = encodeURIComponent(
    "Hi Gulfam,\n\nI would like to discuss a project with you."
  );

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`,
    "_blank"
  );
};

  return (
    <section id="contact" data-testid="section-contact" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-2 block">// get_in_touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contact Me</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
          />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's talk. I'm always open to new opportunities and interesting work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-6 rounded-2xl border border-border bg-card h-full">
              <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-foreground truncate">{EMAIL}</span>
                      <button
                        data-testid="button-copy-email"
                        onClick={copyEmail}
                        className="flex-shrink-0 p-1 rounded text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        aria-label="Copy email"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                    <div className="text-sm text-foreground">Islamabad, Pakistan (Remote-first)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Availability</div>
                    <div className="text-sm text-foreground">Open to freelance & full-time</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 rounded-2xl border border-border bg-card h-full flex flex-col">
              <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
              <p className="text-muted-foreground text-sm mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out via email, and I'll respond within 24 hours.
              </p>

              <button
                onClick={openEmailClient}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-0.5 mb-6 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send me an email
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <div className="border-t border-border pt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Find Me Online</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Github, label: "GitHub", href: "https://github.com" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/gulfam-ashraf-75676a287" },
                    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      data-testid={`link-contact-${label.toLowerCase()}`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all hover:-translate-y-0.5"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}