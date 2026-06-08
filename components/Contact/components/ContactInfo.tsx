import { Mail, MapPin } from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";

export function ContactInfo() {
  return (
    <div className="md:col-span-2 space-y-6">
      <div className="p-6 rounded-xl border border-border bg-card/50">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Informações de Contato
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground/70">Email</p>
              <p className="text-foreground">well.devbr@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <RiWhatsappLine className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground/70">Whatsapp</p>
              <p className="text-foreground">(88) 99485-8485</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground/70">Localização</p>
              <p className="text-foreground">Icó, Ceará, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
