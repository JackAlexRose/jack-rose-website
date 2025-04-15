import ContactForm from "@/components/contact-form";
import { Peekaboo } from "@/components/Peekaboo";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 gradient-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-medium text-black mb-8">Ping Me</h1>
          <p className="text-black/80 mb-12 w-[70%]">
            Please fill out the form below to throw me a message. I&apos;d love
            to chat.
          </p>
          <div className="relative">
            <Peekaboo />
          </div>

          <div className="bg-white/20 rounded-xl p-6 md:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
