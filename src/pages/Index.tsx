import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              Project Placeholder
            </Badge>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              IMG_QR_WEB
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              QR Code Image Processing Web Application
            </p>
          </div>

          {/* Status Card */}
          <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Project Ready</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This project placeholder is ready for your files. Connect to GitHub and upload your IMG_QR_WEB application files to get started.
                </p>
              </div>
              
              {/* Next Steps */}
              <div className="pt-4 border-t border-border/50">
                <h3 className="font-medium mb-3 text-left">Next Steps:</h3>
                <div className="space-y-2 text-left text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Connect this project to GitHub</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Upload your application files</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Start developing your QR code processing features</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
