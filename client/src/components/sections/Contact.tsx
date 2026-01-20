import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  businessName: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Inquiry Sent",
      description: "Thank you for contacting PERSERVIA. We will get back to you shortly.",
    });
    console.log("Contact form submitted:", values);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-slate-900 text-white p-12 md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">Get in Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Ready to upgrade your cold chain? Fill out the form or visit our facility.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-white mb-1">Visit Us</h5>
                  <p className="text-slate-400 text-sm">123 Cold Chain Blvd,<br />Floral District, NY 10001</p>
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Call Us</h5>
                  <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Email</h5>
                  <p className="text-slate-400 text-sm">hello@perservia.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <div className="w-12 h-1 bg-primary rounded-full" />
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-3/5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-slate-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@florist.com" {...field} className="bg-slate-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Bloom & Co." {...field} className="bg-slate-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="I'm interested in storing 500 crates of roses..." 
                          className="min-h-[120px] bg-slate-50"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
