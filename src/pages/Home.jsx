import TypingText from "@/components/ui/shadcn-io/typing-text";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-69px)] pb-16">
      <TypingText
        text={["Bem vindo a IP Station"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        className="text-4xl font-bold text-center max-w-2xl"
        loop={false}
        cursorClassName="h-12"
        textColors={["#000000"]}
        variableSpeed={{ min: 50, max: 120 }}
        cursorCharacter="_"
      />
    </div>
  );
}

export default Home;
