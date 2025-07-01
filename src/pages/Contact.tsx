
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            details: "hello@perssonify.com",
            description: "Get in touch for collaboration"
        },
        {
            icon: Phone,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            description: "Speak directly with our team"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "San Francisco, CA",
            description: "Come see us in person"
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: "Mon-Fri 9AM-6PM PST",
            description: "We're here when you need us"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 py-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Let's Build Something Amazing Together
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to transform your business? We're here to help you grow faster and scale smarter.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                We're here to help your business grow. Reach out and let's discuss how we can accelerate your success.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                >
                                    <Card className="p-6 h-full">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                                                <p className="font-medium text-foreground mb-1 break-words">{info.details}</p>
                                                <p className="text-sm text-muted-foreground">{info.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full"
                    >
                        <Card className="p-8 border-0 bg-gradient-to-br from-card via-card to-card/80 shadow-xl">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-4 text-foreground">Start Your Growth Journey</h3>
                                <p className="text-muted-foreground">
                                    Tell us about your business goals and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                                            First Name *
                                        </Label>
                                        <Input
                                            id="firstName"
                                            placeholder="First Name"
                                            type="text"
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                                            Last Name *
                                        </Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Last Name"
                                            type="text"
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Work Email *
                                    </Label>
                                    <Input
                                        id="email"
                                        placeholder="Work Email"
                                        type="email"
                                        required
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
                                        Company Name
                                    </Label>
                                    <Input
                                        id="company"
                                        placeholder="Company Name"
                                        type="text"
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-medium text-foreground">
                                        Service Interest
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="growth">Growth Solutions</SelectItem>
                                            <SelectItem value="strategic">Strategic Solutions</SelectItem>
                                            <SelectItem value="both">Both Services</SelectItem>
                                            <SelectItem value="consultation">General Consultation</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-medium text-foreground">
                                        Budget Range
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                            <SelectItem value="50k+">$50,000+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                                        Message *
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Describe your current challenges and what you'd like to achieve..."
                                        rows={4}
                                        required
                                        className="w-full resize-none"
                                    />
                                </div>

                                <Button size="lg" className="w-full font-semibold">
                                    Send Message
                                </Button>

                                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                                    By submitting this form, you agree to our{" "}
                                    <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">
                                        Privacy Policy
                                    </Link>{" "}
                                    and{" "}
                                    <Link to="/terms-of-service" className="underline hover:text-primary transition-colors">
                                        Terms of Service
                                    </Link>
                                </p>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
