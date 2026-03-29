import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

import cafuTrophy from "@/assets/cafu-trophy.png";
import cafuSpeaker from "@/assets/cafu-speaker.png";
import crowdEnergy from "@/assets/crowd-energy.png";
import venueExterior from "@/assets/venue-exterior.png";
import venueInterior from "@/assets/venue-interior.png";
import superbetLogo from "@/assets/superbet-logo.png";
import superbetActivation from "@/assets/superbet-activation.png";
import foodDonation from "@/assets/food-donation.png";
import shoppingPromo from "@/assets/shopping-promo.png";
import podcastStage from "@/assets/podcast-stage.png";

const slideVariants = {
  enter: { opacity: 0, scale: 0.96 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.04 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

// Reusable components
const SlideNumber = ({ n, total }: { n: number; total: number }) => (
  <div className="absolute bottom-6 right-8 font-display text-sm tracking-widest text-muted-foreground">
    {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
  </div>
);

const RedBar = () => (
  <div className="h-1 w-20 rounded-full bg-primary" />
);

const GoldBar = () => (
  <div className="h-1 w-20 rounded-full bg-accent" />
);

const BgImage = ({ src, opacity = "opacity-20" }: { src: string; opacity?: string }) => (
  <div className={`absolute inset-0 ${opacity}`}>
    <img src={src} alt="" className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
  </div>
);

const Logo = ({ className = "h-12" }: { className?: string }) => (
  <img src={superbetLogo} alt="Superbet" className={`${className} object-contain`} />
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <motion.li key={i} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-start gap-3 font-body text-sm leading-relaxed text-foreground/80 md:text-base">
        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
        {item}
      </motion.li>
    ))}
  </ul>
);

// All 26 slides
const slides = [
  // SLIDE 1 — CAPA
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <BgImage src={cafuTrophy} opacity="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <Logo className="h-16 md:h-20" />
        </motion.div>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-sm uppercase tracking-[0.4em] text-primary">
          Superbet Apresenta
        </motion.p>
        <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-4xl font-bold uppercase leading-tight tracking-wider text-foreground md:text-7xl">
          Superbet Champions<br />
          <span className="text-primary">Experience</span>
        </motion.h1>
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
          <GoldBar />
        </motion.div>
        <motion.h2 custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xl font-light uppercase tracking-widest text-accent md:text-3xl">
          Uma Noite com Cafu
        </motion.h2>
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-base font-light uppercase tracking-wider text-foreground/70 md:text-lg">
          Liderança, Superação e Mentalidade de Campeão
        </motion.p>
        <motion.p custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="max-w-2xl font-body text-sm leading-relaxed text-muted-foreground md:text-base">
          Uma experiência exclusiva que conecta o universo do esporte de alto rendimento com os desafios da liderança, da disciplina e da construção de resultados extraordinários.
        </motion.p>
      </div>
    </div>
  ),

  // SLIDE 2 — APRESENTAÇÃO DO PROJETO
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={crowdEnergy} opacity="opacity-15" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-8 px-10 md:flex-row md:items-center md:px-20">
        <div className="flex flex-1 flex-col gap-6">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-xs uppercase tracking-[0.3em] text-primary">Apresentação do Projeto</motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase leading-tight text-foreground md:text-5xl">
            O Projeto
          </motion.h2>
          <RedBar />
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm leading-relaxed text-foreground/80 md:text-base">
            O Superbet Champions Experience é um evento de grande impacto que reunirá milhares de pessoas em Brasília para uma noite de inspiração, liderança e mentalidade vencedora com um dos maiores nomes da história do futebol mundial.
          </motion.p>
          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm leading-relaxed text-foreground/80 md:text-base">
            O protagonista da noite será <strong className="text-accent">Cafu</strong>, capitão da seleção brasileira campeã da Copa do Mundo de 2002 e referência global em liderança, disciplina e alta performance.
          </motion.p>
          <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm leading-relaxed text-foreground/80 md:text-base">
            Mais do que uma palestra, o evento foi concebido como uma experiência completa de esporte, inspiração e entretenimento.
          </motion.p>
          <motion.p custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm leading-relaxed text-foreground/70 md:text-base">
            O projeto foi estruturado para permitir que a Superbet assuma o papel de <strong className="text-primary">Patrocinadora Master</strong> e proprietária da experiência.
          </motion.p>
        </div>
        <motion.div custom={2} variants={fadeLeft} initial="hidden" animate="visible"
          className="hidden flex-1 items-center justify-center md:flex">
          <img src={cafuSpeaker} alt="Cafu" className="max-h-[70%] rounded-lg object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-glow)" }} />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 3 — LOCAL
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={venueExterior} opacity="opacity-25" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 px-10 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Local do Evento</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Centro de Convenções<br />Ulysses Guimarães
        </motion.h2>
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-lg uppercase tracking-widest text-accent">Brasília — DF</motion.p>
        <RedBar />
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="max-w-xl font-body text-base text-foreground/80">
          Um dos maiores e mais modernos centros de eventos do Brasil.
        </motion.p>
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center gap-2">
          <span className="font-display text-5xl font-bold text-primary md:text-7xl">3.000</span>
          <span className="font-display text-sm uppercase tracking-widest text-muted-foreground">participantes presenciais</span>
        </motion.div>
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="flex gap-4">
          <img src={venueExterior} alt="Venue" className="h-32 rounded-lg object-cover shadow-lg md:h-48" />
          <img src={venueInterior} alt="Interior" className="h-32 rounded-lg object-cover shadow-lg md:h-48" />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 4 — DATA
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <BgImage src={crowdEnergy} opacity="opacity-10" />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Data do Evento</motion.p>
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-2 rounded-2xl border border-primary/30 bg-secondary/50 px-16 py-10"
          style={{ boxShadow: "var(--shadow-glow)" }}>
          <span className="font-display text-7xl font-bold text-primary md:text-9xl">18</span>
          <span className="font-display text-2xl uppercase tracking-widest text-accent md:text-4xl">Maio</span>
        </motion.div>
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="max-w-lg font-body text-base text-foreground/70">
          Uma noite especial dedicada ao esporte, inspiração e conexão com o público.
        </motion.p>
      </div>
    </div>
  ),

  // SLIDE 5 — FORMATO
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={venueInterior} opacity="opacity-10" />
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Formato do Evento</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Uma Experiência Dinâmica
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          O Superbet Champions Experience foi estruturado como uma experiência dinâmica que combina entretenimento, interação com o público e conteúdo inspirador.
        </motion.p>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          O evento contará com <strong className="text-accent">dois momentos principais</strong> com Cafu.
        </motion.p>
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/70">
          A programação foi desenhada para criar uma experiência envolvente do início ao fim.
        </motion.p>
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="flex gap-6">
          <div className="flex flex-col items-center gap-3 rounded-xl border border-primary/30 bg-secondary/50 p-6">
            <span className="font-display text-2xl font-bold text-primary">1º</span>
            <span className="font-display text-sm uppercase tracking-wider text-foreground">Live Podcast</span>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-accent/30 bg-secondary/50 p-6">
            <span className="font-display text-2xl font-bold text-accent">2º</span>
            <span className="font-display text-sm uppercase tracking-wider text-foreground">Palestra Principal</span>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 6 — PODCAST
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={podcastStage} opacity="opacity-25" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-6 px-10 md:flex-row md:items-center md:gap-12 md:px-20">
        <div className="flex flex-1 flex-col gap-5">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3">
            <span className="rounded-full bg-primary px-4 py-1 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground">19:00</span>
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">Início do Evento</span>
          </motion.div>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
            Live Podcast<br /><span className="text-accent">Experience</span>
          </motion.h2>
          <RedBar />
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm text-foreground/80 md:text-base">
            O evento se inicia com um podcast ao vivo com plateia. Um apresentador conduzirá uma conversa descontraída com Cafu abordando temas como:
          </motion.p>
          <BulletList items={[
            "Bastidores da carreira",
            "Histórias da Seleção Brasileira",
            "Curiosidades do futebol profissional",
            "Mentalidade de atleta de alto nível",
          ]} />
          <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm text-foreground/80 md:text-base">
            Durante esse momento também acontecerão:
          </motion.p>
          <BulletList items={[
            "Interação com a plateia",
            "Perguntas do público",
            "Sorteios de brindes",
            "Momentos de entretenimento",
          ]} />
          <motion.p custom={10} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-xs italic text-muted-foreground">Duração aproximada: 1 hora</motion.p>
        </div>
        <motion.div custom={2} variants={fadeLeft} initial="hidden" animate="visible"
          className="hidden flex-1 items-center justify-center md:flex">
          <img src={podcastStage} alt="Podcast" className="max-h-[60%] rounded-lg object-cover shadow-2xl" />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 7 — INTERVALO
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={superbetActivation} opacity="opacity-20" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3">
          <span className="rounded-full bg-accent px-4 py-1 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground">20:00</span>
          <span className="font-display text-xs uppercase tracking-[0.3em] text-accent">Intervalo</span>
        </motion.div>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Intervalo &<br /><span className="text-primary">Experiência</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          Intervalo de aproximadamente 40 minutos. Nesse período o público poderá:
        </motion.p>
        <BulletList items={[
          "Visitar ativações da Superbet",
          "Interagir com patrocinadores",
          "Participar de experiências promocionais",
          "Conhecer espaços instagramáveis do evento",
        ]} />
        <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible">
          <img src={superbetActivation} alt="Ativação" className="mt-4 h-40 rounded-lg object-cover shadow-xl md:h-52" />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 8 — PALESTRA
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={cafuTrophy} opacity="opacity-20" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-6 px-10 md:flex-row md:items-center md:gap-12 md:px-20">
        <motion.div custom={0} variants={fadeLeft} initial="hidden" animate="visible"
          className="hidden flex-1 items-center justify-center md:flex">
          <img src={cafuTrophy} alt="Cafu Troféu" className="max-h-[65%] rounded-lg object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-gold)" }} />
        </motion.div>
        <div className="flex flex-1 flex-col gap-5">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3">
            <span className="rounded-full bg-primary px-4 py-1 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground">20:45</span>
          </motion.div>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
            Palestra com<br /><span className="text-accent">Cafu</span>
          </motion.h2>
          <RedBar />
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm text-foreground/80 md:text-base">
            Após o intervalo, Cafu retorna ao palco para a palestra principal da noite. Durante aproximadamente 1 hora, Cafu compartilhará sua trajetória desde o início da carreira até a conquista da Copa do Mundo de 2002 como capitão da Seleção Brasileira.
          </motion.p>
          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-sm uppercase tracking-wider text-primary">Temas abordados:</motion.p>
          <BulletList items={["Liderança", "Mentalidade vencedora", "Disciplina", "Trabalho em equipe", "Superação de desafios"]} />
        </div>
      </div>
    </div>
  ),

  // SLIDE 9 — ENCERRAMENTO
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={cafuSpeaker} opacity="opacity-15" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Encerramento &<br /><span className="text-accent">Meet & Greet</span>
        </motion.h2>
        <RedBar />
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="flex gap-6">
          <div className="rounded-xl border border-border bg-secondary/60 p-5 text-center">
            <span className="block font-display text-xl font-bold text-primary">21:45</span>
            <span className="font-body text-xs text-muted-foreground">Encerramento da Palestra</span>
          </div>
          <div className="rounded-xl border border-accent/30 bg-secondary/60 p-5 text-center">
            <span className="block font-display text-xl font-bold text-accent">22:00</span>
            <span className="font-body text-xs text-muted-foreground">Meet & Greet Experience</span>
          </div>
        </motion.div>
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          Após o evento haverá um momento especial de interação com Cafu.
        </motion.p>
        <BulletList items={["Sessão de fotos", "Autógrafos", "Interação com convidados", "Networking entre participantes"]} />
      </div>
    </div>
  ),

  // SLIDE 10 — PERFIL DO PÚBLICO
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={crowdEnergy} opacity="opacity-15" />
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Perfil do Público</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Público Altamente<br /><span className="text-primary">Engajado</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          O evento reunirá um público altamente conectado com o universo do esporte e das apostas esportivas.
        </motion.p>
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {["Fãs de futebol e esportes", "Apostadores esportivos", "Usuários de plataformas de apostas online",
            "Traders esportivos e analistas", "Criadores de conteúdo esportivo", "Influenciadores digitais",
            "Profissionais do mercado digital", "Jovens profissionais e universitários", "Empreendedores e profissionais liberais",
            "Executivos e empresários"].map((item, i) => (
              <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
                className="rounded-lg border border-border bg-secondary/60 p-3 text-center">
                <span className="font-body text-xs text-foreground/80">{item}</span>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 11 — EXPERIÊNCIA DE MARCA
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={superbetActivation} opacity="opacity-15" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Experiência de Marca</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Presença<br /><span className="text-primary">Dominante</span>
        </motion.h2>
        <GoldBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          Ao assumir o papel de Patrocinadora Master, a Superbet terá presença dominante em toda a experiência do evento.
        </motion.p>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/70">
          A marca estará presente em todos os pontos de contato com o público.
        </motion.p>
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <Logo className="h-20" />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 12 — ATIVAÇÃO CENTRAL
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={superbetActivation} opacity="opacity-20" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-6 px-10 md:flex-row md:items-center md:gap-12 md:px-20">
        <div className="flex flex-1 flex-col gap-5">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-xs uppercase tracking-[0.3em] text-primary">Ativação Central da Marca</motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase text-foreground md:text-4xl">
            Ilha Oficial<br /><span className="text-primary">Superbet</span>
          </motion.h2>
          <RedBar />
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm text-foreground/80 md:text-base">
            Logo na entrada do evento será instalada uma ilha oficial da Superbet. Um estande de grande impacto visual em área estratégica.
          </motion.p>
          <BulletList items={[
            "Apresentar sua plataforma",
            "Cadastrar novos usuários",
            "Realizar ativações promocionais",
            "Distribuir brindes exclusivos",
            "Interagir diretamente com o público",
          ]} />
        </div>
        <motion.div custom={3} variants={fadeLeft} initial="hidden" animate="visible"
          className="hidden flex-1 items-center justify-center md:flex">
          <img src={superbetActivation} alt="Ativação" className="max-h-[60%] rounded-lg object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-glow)" }} />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 13 — BRANDING
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Branding em Todo o Evento</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Presença<br /><span className="text-accent">Total</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          A presença da marca será total durante toda a experiência. Incluindo:
        </motion.p>
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {["Palco principal", "Telões do evento", "Backdrop oficial", "Credenciais", "Sinalização interna", "Cenografia do evento", "Materiais promocionais"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-primary/20 bg-secondary/60 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-body text-sm text-foreground/80">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 14 — SORTEIOS
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={cafuTrophy} opacity="opacity-10" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-accent">Sorteios e Experiências</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Sorteios<br /><span className="text-primary">Especiais</span>
        </motion.h2>
        <GoldBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          Durante o evento serão realizados sorteios especiais para o público. Entre os prêmios possíveis:
        </motion.p>
        <BulletList items={[
          "Chuteiras Adidas",
          "Camisas da Seleção Brasileira de 2002",
          "Itens colecionáveis do futebol",
        ]} />
        <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-sm italic text-foreground/70">
          Também poderá ser exibida uma camisa histórica da conquista da Copa do Mundo de 2002, levantada pelo capitão Cafu.
        </motion.p>
      </div>
    </div>
  ),

  // SLIDE 15 — DIVULGAÇÃO
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Plano de Divulgação</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Mídia<br /><span className="text-primary">Exterior</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          O evento contará com uma forte campanha de divulgação em toda a cidade de Brasília. Entre as ações previstas:
        </motion.p>
        <BulletList items={["Outdoors espalhados pela cidade", "Banners em grandes avenidas", "Painéis urbanos"]} />
      </div>
    </div>
  ),

  // SLIDE 16 — SHOPPING
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={shoppingPromo} opacity="opacity-20" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-6 px-10 md:flex-row md:items-center md:gap-12 md:px-20">
        <div className="flex flex-1 flex-col gap-5">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-xs uppercase tracking-[0.3em] text-primary">Shopping Centers</motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase text-foreground md:text-4xl">
            Divulgação em<br /><span className="text-accent">Shoppings</span>
          </motion.h2>
          <RedBar />
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm text-foreground/80 md:text-base">
            Divulgação em grandes shopping centers da cidade.
          </motion.p>
          <BulletList items={["Banners", "Materiais promocionais", "Pontos de divulgação em áreas de grande circulação"]} />
        </div>
        <motion.div custom={3} variants={fadeLeft} initial="hidden" animate="visible"
          className="hidden flex-1 items-center justify-center md:flex">
          <img src={shoppingPromo} alt="Shopping" className="max-h-[60%] rounded-lg object-cover shadow-2xl" />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 17 — MATERIAL PROMOCIONAL
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Divulgação</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Material<br /><span className="text-primary">Promocional</span>
        </motion.h2>
        <RedBar />
        <BulletList items={["Distribuição de flyers", "Materiais promocionais físicos", "Divulgação em locais estratégicos"]} />
      </div>
    </div>
  ),

  // SLIDE 18 — MÍDIA PAGA
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-accent">Mídia Digital</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Mídia<br /><span className="text-primary">Paga</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          Campanha de mídia paga em larga escala. Incluindo:
        </motion.p>
        <BulletList items={["Anúncios nas redes sociais", "Campanhas digitais", "Mídia segmentada para fãs de esporte e apostas"]} />
      </div>
    </div>
  ),

  // SLIDE 19 — RÁDIO E IMPRENSA
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Cobertura</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Rádio &<br /><span className="text-accent">Imprensa</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          O evento contará com divulgação em:
        </motion.p>
        <BulletList items={["Emissoras de rádio", "Portais de notícias", "Veículos de imprensa"]} />
      </div>
    </div>
  ),

  // SLIDE 20 — TV
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Televisão</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Cobertura<br /><span className="text-primary">Record</span>
        </motion.h2>
        <GoldBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          O evento contará com cobertura da emissora Record.
        </motion.p>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/70">
          Ampliando significativamente o alcance e visibilidade do projeto.
        </motion.p>
      </div>
    </div>
  ),

  // SLIDE 21 — IMPACTO SOCIAL
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={foodDonation} opacity="opacity-20" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-10 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-brand-green">Impacto Social</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Compromisso<br /><span className="text-brand-green">Social</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="max-w-xl font-body text-base text-foreground/80">
          O evento também terá caráter social. A entrada será realizada mediante a doação de 1kg de alimento não perecível.
        </motion.p>
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-2 rounded-2xl border border-brand-green/30 bg-secondary/50 px-12 py-8">
          <span className="font-display text-5xl font-bold text-brand-green md:text-7xl">3</span>
          <span className="font-display text-2xl uppercase tracking-widest text-accent">Toneladas</span>
          <span className="font-body text-sm text-muted-foreground">Meta de arrecadação de alimentos</span>
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 22 — DESTINAÇÃO
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={foodDonation} opacity="opacity-15" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-6 px-10 md:flex-row md:items-center md:gap-12 md:px-20">
        <div className="flex flex-1 flex-col gap-5">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-xs uppercase tracking-[0.3em] text-brand-green">Destinação dos Alimentos</motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase text-foreground md:text-4xl">
            Para Quem<br /><span className="text-brand-green">Mais Precisa</span>
          </motion.h2>
          <RedBar />
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm text-foreground/80 md:text-base">
            Os alimentos arrecadados serão destinados a:
          </motion.p>
          <BulletList items={["Famílias em situação de vulnerabilidade", "Instituições sociais", "Projetos comunitários"]} />
        </div>
        <motion.div custom={3} variants={fadeLeft} initial="hidden" animate="visible"
          className="hidden flex-1 items-center justify-center md:flex">
          <img src={foodDonation} alt="Doações" className="max-h-[55%] rounded-lg object-cover shadow-2xl" />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 23 — PARTICIPAÇÃO SOCIAL SUPERBET
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <Logo className="h-14" />
        </motion.div>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-brand-green">Participação Social da Superbet</motion.p>
        <motion.h2 custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Ação Social<br /><span className="text-primary">Superbet</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          Como patrocinadora master do evento, a Superbet também poderá participar diretamente da ação social. Após o evento será realizada uma entrega oficial dos alimentos arrecadados com presença de:
        </motion.p>
        <BulletList items={["Representantes da Superbet", "Organizadores", "Instituições beneficiadas", "Imprensa"]} />
      </div>
    </div>
  ),

  // SLIDE 24 — IMPACTO ESTIMADO
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={crowdEnergy} opacity="opacity-15" />
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Impacto Estimado</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Números do<br /><span className="text-primary">Evento</span>
        </motion.h2>
        <GoldBar />
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { num: "3.000", label: "Participantes Presenciais" },
            { num: "1-3M", label: "Impactos Digitais" },
            { num: "TV", label: "Cobertura de Televisão" },
            { num: "360°", label: "Campanha Urbana" },
          ].map((stat, i) => (
            <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-secondary/60 p-6"
              style={{ boxShadow: i === 0 ? "var(--shadow-glow)" : undefined }}>
              <span className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.num}</span>
              <span className="font-body text-xs text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 25 — COTA MASTER
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={cafuTrophy} opacity="opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <Logo className="h-16" />
        </motion.div>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-sm uppercase tracking-[0.4em] text-primary">Superbet Apresenta</motion.p>
        <motion.h2 custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Cota <span className="text-accent">Master</span>
        </motion.h2>
        <RedBar />
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="rounded-2xl border border-primary/40 bg-secondary/60 px-12 py-8" style={{ boxShadow: "var(--shadow-glow)" }}>
          <span className="font-display text-5xl font-bold text-primary md:text-7xl">R$ 800.000</span>
        </motion.div>
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-sm uppercase tracking-wider text-muted-foreground">Investimento da Cota Master</motion.p>
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {["Naming rights do evento", "Exposição total da marca", "Ativações exclusivas", "Presença em toda campanha de mídia", "Participação nas ações sociais", "Associação direta com Cafu"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-primary/20 bg-secondary/40 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-body text-xs text-foreground/80">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 26 — POSICIONAMENTO FINAL
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={cafuTrophy} opacity="opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <Logo className="h-14" />
        </motion.div>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Mais que um<br /><span className="text-primary">Evento</span>
        </motion.h2>
        <GoldBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-lg text-foreground/80">
          Este projeto não é apenas um evento.
        </motion.p>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          Ele foi estruturado como uma <strong className="text-accent">plataforma completa</strong> de branding, entretenimento, esporte e impacto social.
        </motion.p>
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/70">
          Uma experiência capaz de gerar visibilidade, conexão emocional com o público e grande repercussão.
        </motion.p>
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-4 flex gap-3">
          {["Branding", "Entretenimento", "Esporte", "Impacto Social"].map((p) => (
            <span key={p} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-display text-xs uppercase tracking-wider text-primary">
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  ),
];

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = useCallback((n: number) => {
    if (n >= 0 && n < total) setCurrent(n);
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goTo(current + 1); }
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); document.documentElement.requestFullscreen?.(); }
      if (e.key === "Escape") document.exitFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  const SlideComponent = slides[current];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <SlideComponent />
          <SlideNumber n={current + 1} total={total} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4">
        <button onClick={() => goTo(current - 1)} disabled={current === 0}
          className="rounded-full bg-secondary/80 p-2 text-foreground/60 backdrop-blur-sm transition hover:text-foreground disabled:opacity-30">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"}`} />
          ))}
        </div>
        <button onClick={() => goTo(current + 1)} disabled={current === total - 1}
          className="rounded-full bg-secondary/80 p-2 text-foreground/60 backdrop-blur-sm transition hover:text-foreground disabled:opacity-30">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Fullscreen */}
      <button onClick={() => document.documentElement.requestFullscreen?.()}
        className="absolute right-8 top-6 z-50 rounded-full bg-secondary/60 p-2 text-foreground/40 backdrop-blur-sm transition hover:text-foreground">
        <Maximize className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Presentation;
