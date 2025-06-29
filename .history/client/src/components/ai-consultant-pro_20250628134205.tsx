import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AIConsultantPro() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: "init",
      type: "ai",
      content: "Olá! Sou a IA Consultant Pro da Construware. Qual seu nome?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (content: string, type: "ai" | "user") => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), type, content },
    ]);
  };

  const handleTextInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addMessage(inputValue, "user");
      // Simular resposta curta da IA
      setTimeout(() => {
        addMessage("Prazer, " + inputValue.split(" ")[0] + ". Qual o segmento da sua empresa?", "ai");
      }, 800);
      setInputValue("");
    }
  };

  // Centralizado, dark, gradiente laranja, minimalista
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <motion.div
        className="w-full max-w-md rounded-2xl shadow-2xl border border-orange-700 bg-gradient-to-br from-[#181818] via-[#1a120b] to-[#ff7a18]"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header minimalista */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-orange-900 bg-gradient-to-r from-[#ff7a18] to-[#ffae42]">
          <span className="font-bold text-lg text-white tracking-tight">Construware IA</span>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-orange-900/30"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        {/* Mensagens */}
        <div className="flex flex-col gap-3 px-6 py-6 min-h-[320px] max-h-[420px] overflow-y-auto bg-[#181818]">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`w-fit max-w-[85%] rounded-xl px-4 py-2 text-sm ${
                  msg.type === "ai"
                    ? "bg-orange-900/80 text-orange-100 self-start"
                    : "bg-orange-600 text-white self-end"
                }`}
              >
                {msg.content}
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
        {/* Input */}
        <form
          onSubmit={handleTextInput}
          className="flex items-center gap-2 px-6 py-4 border-t border-orange-900 bg-[#181818]"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite ou fale..."
            className="flex-1 bg-[#232323] border-none text-orange-100 placeholder:text-orange-300 focus:ring-0 focus:outline-none"
            autoFocus
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={`text-orange-400 hover:text-orange-200 ${isListening ? "bg-orange-900/40" : ""}`}
            tabIndex={-1}
            // onClick={toggleListening} // Implementar se necessário
          >
            {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          <Button
            type="submit"
            size="icon"
            className="bg-gradient-to-r from-[#ff7a18] to-[#ffae42] text-white hover:from-[#ffae42] hover:to-[#ff7a18]"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </motion.div>
    </div>
  );
} 