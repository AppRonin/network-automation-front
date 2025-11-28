import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function Sobre() {
  return (
    <div className="min-h-[calc(100vh-69px)] w-full bg-white p-6 flex justify-center">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold">Sobre</h1>

        <p className="text-gray-600">
          Esta aplicação foi criada para facilitar o trabalho do time de suporte
          de rede.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>O que ela faz?</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-2">
            <p>• Automatiza atividades repetitivas do suporte.</p>
            <p>• Facilita diagnósticos e conferências.</p>
            <p>• Padroniza processos para evitar erros.</p>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>Principais benefícios</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-2">
            <p>• Mais rapidez</p>
            <p>• Menos erros</p>
            <p>• Maior produtividade</p>
          </CardContent>
        </Card>

        <p className="text-sm text-gray-500 pt-4">
          © {new Date().getFullYear()} • AppRonin
        </p>
      </div>
    </div>
  );
}

export default Sobre;
