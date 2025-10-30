import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Trophy, Target, Users, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { getSportSelectionQuizTranslation } from "@/lib/translations";

const sportIcons = {
  tennis: Trophy,
  golf: Target,
  football: Users,
  basketball: Clock,
  baseball: Trophy,
  soccer: Users,
  lacrosse: Target,
  track: Clock,
  wrestling: Users,
} as const;

const sportColors: Record<string, string> = {
  tennis: "bg-green-500",
  golf: "bg-emerald-500",
  football: "bg-blue-500",
  basketball: "bg-orange-500",
  baseball: "bg-red-500",
  soccer: "bg-green-600",
  lacrosse: "bg-purple-500",
  track: "bg-yellow-500",
  wrestling: "bg-gray-600",
};

const SportSelectionQuiz = () => {
  const { language } = useLanguage();
  const quizCopy = getSportSelectionQuizTranslation(language);
  const questions = quizCopy.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswer });

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      } else {
        setShowResults(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer("");
  };

  const getRecommendedSports = () => {
    const sportCounts: Record<string, number> = {};

    Object.values(answers).forEach((answer, questionIndex) => {
      const question = questions[questionIndex];
      const option = question.options.find((opt) => opt.id === answer);

      if (option) {
        option.sports.forEach((sport) => {
          sportCounts[sport] = (sportCounts[sport] || 0) + 1;
        });
      }
    });

    return Object.entries(sportCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([sport]) => sport);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const progressBadge = quizCopy.progress.badge
    .replace("{{current}}", String(currentQuestion + 1))
    .replace("{{total}}", String(questions.length));
  const progressStatus = quizCopy.progress.status.replace(
    "{{percent}}",
    String(Math.round(progress))
  );

  if (showResults) {
    const recommendedSports = getRecommendedSports();

    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-img-blue">{quizCopy.results.title}</CardTitle>
          <CardDescription>{quizCopy.results.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendedSports.map((sportId, index) => {
              const sportDetail = quizCopy.sportDetails[sportId];
              const IconComponent = sportIcons[sportId as keyof typeof sportIcons] ?? Trophy;
              const colorClass = sportColors[sportId] ?? "bg-img-blue";

              if (!sportDetail) {
                return null;
              }

              return (
                <Card key={sportId} className="border-2 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{sportDetail.name}</h3>
                          <Badge variant={index === 0 ? "default" : "secondary"}>
                            {index === 0
                              ? quizCopy.results.bestBadge
                              : quizCopy.results.optionLabel.replace("{{index}}", String(index + 1))}
                          </Badge>
                        </div>
                      </div>
                      <Link to={`/sport/${sportId}`}>
                        <Button className="bg-img-blue hover:bg-img-blue-dark">
                          {quizCopy.results.detailsButton}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button onClick={handleRestart} variant="outline" className="flex-1">
              {quizCopy.results.restartButton}
            </Button>
            <Link to="/contact" className="flex-1">
              <Button className="w-full bg-img-blue hover:bg-img-blue-dark">
                {quizCopy.results.contactButton}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline">{progressBadge}</Badge>
          <span className="text-sm text-gray-500">{progressStatus}</span>
        </div>
        <Progress value={progress} className="mb-4" />
        <CardTitle className="text-xl text-img-blue">{question.prompt}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
          <div className="space-y-4">
            {question.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label
                  htmlFor={option.id}
                  className="flex-1 cursor-pointer p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
          >
            {quizCopy.navigation.previous}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="bg-img-blue hover:bg-img-blue-dark"
          >
            {currentQuestion === questions.length - 1
              ? quizCopy.navigation.results
              : quizCopy.navigation.next}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SportSelectionQuiz;
