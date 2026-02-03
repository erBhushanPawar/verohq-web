import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../client/components/ui/button";
import { Card, CardContent, CardTitle } from "../client/components/ui/card";
import { Input } from "../client/components/ui/input";
import { Label } from "../client/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../client/components/ui/select";
import { Textarea } from "../client/components/ui/textarea";

const contactMethods = [
  {
    icon: Mail,
    name: "Email",
    description: "Reach our team directly",
    detail: "support@verohq.ai",
    href: "mailto:support@verohq.ai",
  },
  {
    icon: MessageCircle,
    name: "Live Chat",
    description: "Talk to us in real time",
    detail: "Available Mon-Fri, 9am-6pm EST",
    href: "#",
  },
  {
    icon: MapPin,
    name: "Office",
    description: "Visit us",
    detail: "San Francisco, CA",
    href: "#",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to backend ContactSubmission API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-wide">
          Contact
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">Get in touch</h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
          Questions about VeroHQ? Want a product demo? Need help with your
          account? We're here.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contactMethods.map((method) => (
            <a key={method.name} href={method.href}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <method.icon className="text-primary mb-3 h-6 w-6" />
                  <CardTitle className="text-base">{method.name}</CardTitle>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {method.description}
                  </p>
                  <p className="text-foreground mt-3 text-sm font-medium">
                    {method.detail}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto max-w-2xl px-6 py-24 lg:px-8">
        <h2 className="text-2xl font-bold">Send us a message</h2>
        <p className="text-muted-foreground mt-2">
          Fill out the form below and we'll get back to you within one business
          day.
        </p>

        {isSubmitted ? (
          <div className="bg-primary/5 border-primary/20 mt-8 rounded-lg border p-8 text-center">
            <h3 className="text-foreground text-lg font-semibold">
              Message sent
            </h3>
            <p className="text-muted-foreground mt-2">
              Thanks for reaching out. We'll get back to you within one business
              day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Select name="subject">
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General inquiry</SelectItem>
                  <SelectItem value="sales">Sales / pricing</SelectItem>
                  <SelectItem value="demo">Request a demo</SelectItem>
                  <SelectItem value="support">Technical support</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
