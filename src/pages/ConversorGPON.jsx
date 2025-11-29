import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function ConversorGPON() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  function handleFile(e) {
    setFile(e.target.files[0]);
  }

  async function startProcess() {
    if (!file) return;

    setLoading(true);
    setProgress(0);

    // Fake progress just to demo the UI
    let i = 0;
    const interval = setInterval(() => {
      i += 10;
      setProgress(i);
      if (i >= 100) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 200);
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-69px)] pb-16">
      <Card className="w-full max-w-md p-4">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-xl font-bold text-left">
            Conversor GPON
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          {/* File input + Button */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="file" onChange={handleFile} className="flex-1" />

              <Button
                onClick={startProcess}
                disabled={!file || loading}
                className="sm:w-40"
              >
                {loading ? "Processando..." : "Converter"}
              </Button>
            </div>
          </div>

          {/* Progress */}
          {(loading || progress > 0) && (
            <div className="space-y-2 mt-8">
              <Progress value={progress} className="h-3" />
              <p className="text-sm text-muted-foreground text-center">
                {progress}%
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default ConversorGPON;
