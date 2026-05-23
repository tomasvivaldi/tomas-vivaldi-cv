"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

const RING_CIRCUMFERENCE = 2 * Math.PI * 38;

type LinkRowProps = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

function LinkRow({ label, value, href, external }: LinkRowProps) {
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid items-center py-4 border-b border-[var(--rule)] no-underline cursor-pointer"
      style={{ gridTemplateColumns: "100px 1fr auto" }}
      whileHover="hover"
      initial="rest"
    >
      <span
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "10px",
          color: "var(--ink-mute)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>

      <motion.span
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 300,
          fontSize: "15px",
          color: "var(--ink)",
        }}
        variants={{
          rest: { x: 0 },
          hover: {
            x: 4,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
        }}
      >
        {value}
      </motion.span>

      <motion.span
        style={{ color: "var(--accent)" }}
        variants={{
          rest: { opacity: 0 },
          hover: {
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
        }}
      >
        ↗
      </motion.span>
    </motion.a>
  );
}

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type FormFieldProps = {
  id: string;
  label: string;
  type?: "text" | "email";
  rows?: number;
  register: ReturnType<typeof useForm<Inputs>>["register"];
  fieldName: keyof Inputs;
  hasError: boolean;
};

function FormField({
  id,
  label,
  type,
  rows,
  register,
  fieldName,
  hasError,
}: FormFieldProps) {
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();
  const isTextarea = rows !== undefined;

  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontWeight: 300,
    fontSize: "14px",
    color: "var(--ink)",
  };

  return (
    <div className="flex flex-col mb-8">
      <label
        htmlFor={id}
        className="mb-2"
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: focused ? "var(--accent)" : "var(--ink-mute)",
          transition: "color 0.2s",
        }}
      >
        {label}
      </label>

      <div className="relative">
        {isTextarea ? (
          <textarea
            id={id}
            rows={rows}
            aria-required="true"
            {...register(fieldName, { required: true })}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent outline-none pb-3 pt-1"
            style={{ ...baseStyle, resize: "vertical" }}
          />
        ) : (
          <input
            id={id}
            type={type ?? "text"}
            aria-required="true"
            {...register(fieldName, { required: true })}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent outline-none pb-3 pt-1"
            style={baseStyle}
          />
        )}

        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{
            backgroundColor: hasError ? "var(--accent)" : "var(--rule)",
            transition: hasError ? "none" : "background-color 0.6s",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-[var(--ink)] origin-left pointer-events-none"
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }
        />
      </div>
    </div>
  );
}

function ContactForm() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [errorFields, setErrorFields] = useState<Set<keyof Inputs>>(new Set());

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const subject = encodeURIComponent(`Contact from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n(${data.email})`);
    window.location.href = `mailto:tms.vivaldi@gmail.com?subject=${subject}&body=${body}`;
  };

  const onInvalid = (fieldErrors: Partial<Record<keyof Inputs, unknown>>) => {
    const invalid = new Set<keyof Inputs>(
      (Object.keys(fieldErrors) as Array<keyof Inputs>).filter(
        (k) => fieldErrors[k]
      )
    );
    setErrorFields(invalid);
    setTimeout(() => setErrorFields(new Set()), 600);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="flex flex-col"
      style={{ transform: "translateX(var(--form-offset, 12px))" }}
      noValidate
    >
      <FormField
        id="contact-name"
        label="NAME"
        type="text"
        register={register}
        fieldName="name"
        hasError={errorFields.has("name")}
      />
      <FormField
        id="contact-email"
        label="EMAIL"
        type="email"
        register={register}
        fieldName="email"
        hasError={errorFields.has("email")}
      />
      <FormField
        id="contact-message"
        label="MESSAGE"
        rows={3}
        register={register}
        fieldName="message"
        hasError={errorFields.has("message")}
      />

      <div className="flex justify-end mt-8">
        <motion.button
          type="submit"
          whileHover="hover"
          initial="rest"
          className="flex items-center gap-1 bg-transparent border-none cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "18px",
            color: "var(--accent)",
          }}
        >
          <span>SEND</span>
          <motion.span
            variants={{
              rest: { x: 0 },
              hover: {
                x: 6,
                transition: { type: "spring", stiffness: 300, damping: 24 },
              },
            }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </form>
  );
}

export default function ContactMe() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[var(--bg)] py-24 overflow-visible"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          aria-hidden="true"
        >
          <motion.circle
            cx="40"
            cy="40"
            r="38"
            stroke="var(--ink-mute)"
            strokeWidth="1"
            strokeDasharray={RING_CIRCUMFERENCE}
            initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.svg>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[52px_2fr_3fr] gap-0 relative">
          <div className="hidden lg:block" />

          <motion.div variants={childVariants} className="relative">
            <motion.span
              aria-hidden="true"
              className="absolute top-0 left-0 select-none pointer-events-none leading-none text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "clamp(180px, 22vw, 340px)",
                opacity: 0,
              }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              VI
            </motion.span>

            <div className="relative z-10">
              <h2
                className="-ml-6 mb-16 text-[var(--ink)]"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "64px",
                  lineHeight: 1,
                }}
              >
                Get in touch
              </h2>

              <div className="flex flex-col">
                <LinkRow
                  label="EMAIL"
                  value="tms.vivaldi@gmail.com"
                  href="mailto:tms.vivaldi@gmail.com"
                />
                <LinkRow
                  label="LINKEDIN"
                  value="Tomas Vivaldi"
                  href="https://linkedin.com/in/tomas-vivaldi-89475619a"
                  external
                />
              </div>

              <p
                aria-hidden="true"
                className="mt-4 pl-6 italic"
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "9px",
                  color: "var(--ink-pale)",
                }}
              >
                * available for remote †
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="relative mt-12 lg:mt-0"
          >
            <span
              aria-hidden="true"
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "10px",
                fontStyle: "italic",
                color: "var(--ink-pale)",
              }}
            >
              35.6762° N
            </span>

            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
