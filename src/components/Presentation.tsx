import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

import cafuTrophy from "@/assets/cafu-trophy.png";
import cafuSpeaker from "@/assets/cafu-speaker.png";
import crowdEnergy from "@/assets/crowd-energy.png";
import venueExterior from "@/assets/venue-exterior.png";
import venueInterior from "@/assets/venue-interior.png";
import cocacolaLogo from "@/assets/cocacola-logo.png";
import kallaLogo from "@/assets/kalla-logo.png";
import cocacolaShopping from "@/assets/cocacola-shopping.png";
import foodDonation from "@/assets/food-donation.png";
import cafuTrophyRaised from "@/assets/cafu-trophy-raised.png";
import cafuCelebration from "@/assets/cafu-celebration.png";
import cafuPortrait from "@/assets/cafu-portrait.png";
import cafuSuit from "@/assets/cafu-suit.png";
import cocacolaStandNew from "@/assets/cocacola-stand-new.png";
import cocacolaField from "@/assets/cocacola-field.png";
import auditorium from "@/assets/auditorium.png";
import podcastStageNew from "@/assets/podcast-stage-new.png";

// Aliases (replaced versions of older assets used throughout slides)
const podcastStage = podcastStageNew;
const cocacolaStand = cocacolaStandNew;

// Confetti animation overlay
const Confetti = () => {
  const pieces = Array.from({ length: 80 });
  const colors = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--brand-gold))", "#ffffff", "hsl(var(--brand-green))"];
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 4 + Math.random() * 4;
        const size = 6 + Math.random() * 8;
        const color = colors[i % colors.length];
        const rotate = Math.random() * 360;
        return (
          <motion.span
            key={i}
            initial={{ y: -50, x: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: ["-10vh", "110vh"],
              x: [0, Math.random() * 60 - 30, Math.random() * 60 - 30],
              rotate: [0, rotate, rotate * 2],
              opacity: [0, 1, 1, 0.8],
            }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: 0,
              width: size,
              height: size * 0.4,
              background: color,
              borderRadius: 2,
            }}
          />
        );
      })}
    </div>
  );
};

const slideVariants = {
  enter: { opacity: 0, scale: 0.96 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.04 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

// SlideNumber removed per user request

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
  <img src={cocacolaLogo} alt="Coca-Cola" className={`${className} object-contain`} />
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
  // SLIDE 1 — CAPA (with confetti celebration)
  () => (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <BgImage src={cafuTrophyRaised} opacity="opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <Confetti />
      <div className="relative z-30 flex h-full w-full flex-col items-center justify-center gap-6 px-8 md:flex-row md:items-center md:gap-12 md:px-20">
        {/* Cafu image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden flex-shrink-0 md:block"
        >
          <img
            src={cafuCelebration}
            alt="Cafu celebrando com a taça"
            className="h-[70vh] max-h-[600px] rounded-2xl object-cover shadow-2xl"
            style={{ boxShadow: "var(--shadow-glow)" }}
          />
        </motion.div>

        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <Logo className="h-14 md:h-16" />
          </motion.div>
          <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-xs uppercase tracking-[0.4em] text-primary md:text-sm">
            Coca-Cola Apresenta
          </motion.p>
          <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase leading-tight tracking-wider text-foreground md:text-6xl">
            Coca-Cola Champions<br />
            <span className="text-primary">Experience</span>
          </motion.h1>
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
            <GoldBar />
          </motion.div>
          <motion.h2 custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-lg font-light uppercase tracking-widest text-accent md:text-2xl">
            Uma Noite com Cafu
          </motion.h2>
          <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-sm font-light uppercase tracking-wider text-foreground/70 md:text-base">
            Conexão, Inspiração e a Energia de Quem Faz Acontecer
          </motion.p>
          <motion.p custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="max-w-md font-body text-xs leading-relaxed text-muted-foreground md:text-sm">
            Uma experiência única que conecta o universo do esporte com aquilo que a Coca-Cola sempre representou: emoção, união, celebração e momentos inesquecíveis.
          </motion.p>
        </div>
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
            O Coca-Cola Champions Experience é um evento de grande impacto que reunirá milhares de pessoas em Brasília para uma noite marcada por inspiração, conexão humana e histórias que emocionam.
          </motion.p>
          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm leading-relaxed text-foreground/80 md:text-base">
            O protagonista será <strong className="text-accent">Cafu</strong>, capitão da Seleção Brasileira campeã do mundo em 2002, um símbolo de alegria, superação e trabalho em equipe — valores que se conectam diretamente com o espírito da Coca-Cola.
          </motion.p>
          <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm leading-relaxed text-foreground/80 md:text-base">
            Mais do que uma palestra, o evento é uma experiência completa, pensada para gerar momentos compartilháveis, memoráveis e cheios de significado.
          </motion.p>
          <motion.p custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm leading-relaxed text-foreground/70 md:text-base">
            A Coca-Cola assume o papel de <strong className="text-primary">Patrocinadora Master</strong> e protagonista da experiência, criando uma conexão genuína com o público.
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
          Um dos maiores e mais modernos espaços do Brasil, preparado para receber:
        </motion.p>
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center gap-2">
          <span className="font-display text-5xl font-bold text-primary md:text-7xl">3.000</span>
          <span className="font-display text-sm uppercase tracking-widest text-muted-foreground">participantes presenciais</span>
        </motion.div>
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="flex gap-4">
          <img src={venueExterior} alt="Centro de Convenções" className="h-32 rounded-lg object-cover shadow-lg md:h-48" />
          <img src={auditorium} alt="Auditório" className="h-32 rounded-lg object-cover shadow-lg md:h-48" />
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
          <span className="font-display text-7xl font-bold text-primary md:text-9xl">4</span>
          <span className="font-display text-2xl uppercase tracking-widest text-accent md:text-4xl">Setembro</span>
        </motion.div>
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="max-w-lg font-body text-base text-foreground/70">
          Uma noite criada para celebrar histórias, conexões e experiências inesquecíveis.
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
          Uma Experiência<br /><span className="text-primary">Viva e Interativa</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          O evento foi desenhado como uma jornada envolvente, onde o público não apenas assiste — vive a experiência Coca-Cola.
        </motion.p>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          <strong className="text-accent">Dois grandes momentos</strong> com Cafu:
        </motion.p>
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
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
            Um bate-papo leve, inspirador e cheio de histórias reais. Temas:
          </motion.p>
          <BulletList items={[
            "Bastidores do futebol",
            "Momentos marcantes da carreira",
            "Espírito de equipe",
            "A alegria de jogar e vencer",
          ]} />
          <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm text-foreground/80 md:text-base">
            Ativações:
          </motion.p>
          <BulletList items={[
            "Interação com o público",
            "Perguntas ao vivo",
            "Dinâmicas e experiências",
            "Distribuição de brindes Coca-Cola",
          ]} />
          <motion.p custom={10} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-xs italic text-muted-foreground">Duração: 1 hora</motion.p>
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
      <BgImage src={cocacolaStand} opacity="opacity-20" />
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
          Um momento pensado para ativação intensa da marca Coca-Cola:
        </motion.p>
        <BulletList items={[
          "Espaços instagramáveis",
          "Experiências sensoriais com produtos",
          "Ativações interativas",
          "Sampling de bebidas",
          "Ambientes de convivência e conexão",
        ]} />
        <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible">
          <img src={cocacolaStand} alt="Ativação Coca-Cola" className="mt-4 h-40 rounded-lg object-cover shadow-xl md:h-52" />
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
            Uma jornada emocionante desde o início humilde até o topo do futebol mundial.
          </motion.p>
          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-sm uppercase tracking-wider text-primary">Temas:</motion.p>
          <BulletList items={["Superação", "Trabalho em equipe", "Alegria no processo", "Construção de legado"]} />
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
            <span className="font-body text-xs text-muted-foreground">Encerramento</span>
          </div>
          <div className="rounded-xl border border-accent/30 bg-secondary/60 p-5 text-center">
            <span className="block font-display text-xl font-bold text-accent">22:00</span>
            <span className="font-body text-xs text-muted-foreground">Experiência exclusiva</span>
          </div>
        </motion.div>
        <BulletList items={["Fotos com Cafu", "Autógrafos", "Networking", "Momentos únicos e memoráveis"]} />
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
          Altamente Conectado<br /><span className="text-primary">e Experiencial</span>
        </motion.h2>
        <RedBar />
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {["Jovens adultos", "Universitários", "Profissionais e empreendedores",
            "Fãs de esporte", "Criadores de conteúdo", "Público digital e social"].map((item, i) => (
              <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
                className="rounded-lg border border-border bg-secondary/60 p-3 text-center">
                <span className="font-body text-xs text-foreground/80">{item}</span>
              </motion.div>
            ))}
        </motion.div>
        <motion.p custom={10} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-sm italic text-foreground/70">
          Um público que valoriza experiências, conexão e propósito.
        </motion.p>
      </div>
    </div>
  ),

  // SLIDE 11 — EXPERIÊNCIA DE MARCA
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={cocacolaStand} opacity="opacity-15" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Experiência de Marca Coca-Cola</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Presença Emocional<br /><span className="text-primary">e Marcante</span>
        </motion.h2>
        <GoldBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          A Coca-Cola estará presente em todos os momentos-chave, criando uma experiência integrada e memorável.
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
      <BgImage src={cocacolaStand} opacity="opacity-20" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-6 px-10 md:flex-row md:items-center md:gap-12 md:px-20">
        <div className="flex flex-1 flex-col gap-5">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-xs uppercase tracking-[0.3em] text-primary">Ativação Central da Marca</motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase text-foreground md:text-4xl">
            Espaço<br /><span className="text-primary">Coca-Cola Experience</span>
          </motion.h2>
          <RedBar />
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm text-foreground/80 md:text-base">
            Logo na entrada:
          </motion.p>
          <BulletList items={[
            "Degustação de produtos",
            "Ativações sensoriais",
            "Espaços de convivência",
            "Interação com o público",
            "Distribuição de brindes exclusivos",
          ]} />
          <motion.p custom={8} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-sm italic text-foreground/70 md:text-base">
            Um ambiente pensado para gerar experiência, compartilhamento e conexão emocional.
          </motion.p>
        </div>
        <motion.div custom={3} variants={fadeLeft} initial="hidden" animate="visible"
          className="hidden flex-1 items-center justify-center md:flex">
          <img src={cocacolaStand} alt="Ativação Coca-Cola" className="max-h-[60%] rounded-lg object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-glow)" }} />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 13 — BRANDING
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Branding no Evento</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Presença<br /><span className="text-accent">Total</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          A marca Coca-Cola integrada de forma natural e envolvente.
        </motion.p>
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {["Palco principal", "Telões", "Cenografia", "Credenciais", "Espaços interativos", "Materiais promocionais"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-primary/20 bg-secondary/60 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-body text-sm text-foreground/80">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 14 — EXPERIÊNCIAS & SORTEIOS
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={cafuTrophy} opacity="opacity-10" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-accent">Experiências & Sorteios</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Experiências<br /><span className="text-primary">Especiais</span>
        </motion.h2>
        <GoldBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          Durante o evento:
        </motion.p>
        <BulletList items={[
          "Kits exclusivos Coca-Cola",
          "Produtos personalizados",
          "Experiências especiais com o público",
        ]} />
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
          Campanha<br /><span className="text-primary">360°</span>
        </motion.h2>
        <RedBar />
        <BulletList items={["Outdoors", "Painéis urbanos", "Shoppings", "Materiais promocionais", "Mídia digital", "Redes sociais"]} />
      </div>
    </div>
  ),

  // SLIDE 16 — SHOPPING (with Coca-Cola shopping image)
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={cocacolaShopping} opacity="opacity-20" />
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
          <img src={cocacolaShopping} alt="Shopping Coca-Cola" className="max-h-[60%] rounded-lg object-cover shadow-2xl" />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 17 — COBERTURA DE MÍDIA
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-primary">Cobertura de Mídia</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Rádio, Imprensa<br /><span className="text-accent">& TV</span>
        </motion.h2>
        <RedBar />
        <BulletList items={["Rádio", "Portais", "Imprensa", "TV (Record)"]} />
        <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/70">
          Ampliação massiva de alcance e visibilidade.
        </motion.p>
      </div>
    </div>
  ),

  // SLIDE 18 — IMPACTO SOCIAL
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={foodDonation} opacity="opacity-20" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-10 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-brand-green">Impacto Social</motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Compartilhar<br /><span className="text-brand-green">Faz Parte</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="max-w-xl font-body text-base text-foreground/80">
          Entrada mediante doação de 1kg de alimento não perecível.
        </motion.p>
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-2 rounded-2xl border border-brand-green/30 bg-secondary/50 px-12 py-8">
          <span className="font-display text-5xl font-bold text-brand-green md:text-7xl">3</span>
          <span className="font-display text-2xl uppercase tracking-widest text-accent">Toneladas</span>
          <span className="font-body text-sm text-muted-foreground">Meta de arrecadação</span>
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 19 — DESTINAÇÃO
  () => (
    <div className="relative flex h-full w-full overflow-hidden">
      <BgImage src={foodDonation} opacity="opacity-15" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-6 px-10 md:flex-row md:items-center md:gap-12 md:px-20">
        <div className="flex flex-1 flex-col gap-5">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-xs uppercase tracking-[0.3em] text-brand-green">Destinação</motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl font-bold uppercase text-foreground md:text-4xl">
            Para Quem<br /><span className="text-brand-green">Mais Precisa</span>
          </motion.h2>
          <RedBar />
          <BulletList items={["Famílias em vulnerabilidade", "Instituições sociais", "Projetos comunitários"]} />
        </div>
        <motion.div custom={3} variants={fadeLeft} initial="hidden" animate="visible"
          className="hidden flex-1 items-center justify-center md:flex">
          <img src={foodDonation} alt="Doações" className="max-h-[55%] rounded-lg object-cover shadow-2xl" />
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 20 — PARTICIPAÇÃO SOCIAL COCA-COLA
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <Logo className="h-14" />
        </motion.div>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xs uppercase tracking-[0.3em] text-brand-green">Participação Social Coca-Cola</motion.p>
        <motion.h2 custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Ação Social<br /><span className="text-primary">Coca-Cola</span>
        </motion.h2>
        <RedBar />
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/80">
          A marca poderá liderar a entrega oficial dos alimentos, reforçando seu posicionamento de:
        </motion.p>
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-lg italic text-accent">
          marca que conecta, transforma e impacta positivamente a sociedade
        </motion.p>
      </div>
    </div>
  ),

  // SLIDE 21 — IMPACTO ESTIMADO
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
            { num: "TV", label: "Cobertura em TV" },
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

  // SLIDE 22 — COTA MASTER
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <BgImage src={cafuTrophy} opacity="opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <Logo className="h-16" />
        </motion.div>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-sm uppercase tracking-[0.4em] text-primary">Coca-Cola Apresenta</motion.p>
        <motion.h2 custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Cota <span className="text-accent">Master</span>
        </motion.h2>
        <RedBar />
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="rounded-2xl border border-primary/40 bg-secondary/60 px-12 py-8" style={{ boxShadow: "var(--shadow-glow)" }}>
          <span className="font-display text-5xl font-bold text-primary md:text-7xl">R$ 900.000</span>
        </motion.div>
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-sm uppercase tracking-wider text-muted-foreground">Investimento da Cota Master</motion.p>
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-2 max-w-3xl rounded-2xl border border-accent/40 bg-accent/10 px-8 py-5"
          style={{ boxShadow: "var(--shadow-glow)" }}>
          <p className="font-display text-xl font-bold uppercase tracking-wide text-accent md:text-3xl">
            Valores abertos a negociação
          </p>
          <p className="mt-2 font-body text-sm text-foreground/80 md:text-base">
            dependendo de estratégia montada e traçada pelo time de marketing da Coca-Cola.
          </p>
        </motion.div>
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {["Naming rights do evento", "Presença total da marca", "Ativações exclusivas", "Integração completa na comunicação", "Associação direta com Cafu", "Participação nas ações sociais"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-primary/20 bg-secondary/40 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-body text-xs text-foreground/80">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  ),

  // SLIDE 23 — POSICIONAMENTO FINAL
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
          O Coca-Cola Champions Experience é uma plataforma de:
        </motion.p>
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap justify-center gap-3">
          {["Branding emocional", "Experiência de marca", "Entretenimento", "Esporte", "Impacto social"].map((p) => (
            <span key={p} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-display text-xs uppercase tracking-wider text-primary">
              {p}
            </span>
          ))}
        </motion.div>
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-base text-foreground/70">
          Uma oportunidade de criar momentos que conectam pessoas — exatamente como Coca-Cola faz há gerações.
        </motion.p>
      </div>
    </div>
  ),

  // SLIDE 24 — KALLA DIGITAL
  () => (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <img src={kallaLogo} alt="Kalla Digital" className="h-28 object-contain md:h-36" />
        </motion.div>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl font-bold uppercase text-foreground md:text-5xl">
          Kalla <span className="text-primary">Digital</span>
        </motion.h2>
        <GoldBar />
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
          CNPJ 34.316.145/0001-18
        </motion.p>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="max-w-xl font-body text-base text-foreground/70">
          Produção e realização do evento.
        </motion.p>
        <motion.div custom={3.5} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-2 rounded-2xl border border-accent/40 bg-accent/10 px-10 py-6"
          style={{ boxShadow: "var(--shadow-glow)" }}>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Aos cuidados de
          </p>
          <p className="mt-2 font-display text-5xl font-bold uppercase tracking-wide text-primary md:text-7xl">
            Keillis
          </p>
        </motion.div>
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-4 flex items-center gap-4">
          <Logo className="h-10" />
          <span className="font-display text-lg text-muted-foreground">×</span>
          <img src={kallaLogo} alt="Kalla Digital" className="h-10 object-contain" />
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
