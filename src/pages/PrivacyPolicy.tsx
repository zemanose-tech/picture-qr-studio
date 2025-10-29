import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import {
  FormattedTextToken,
  getPrivacyPolicyTranslation,
} from "@/lib/translations";

const renderTokens = (tokens: FormattedTextToken[]) =>
  tokens.map((token, index) => {
    switch (token.type) {
      case "strong":
        return (
          <span key={index} className="font-semibold">
            {token.value}
          </span>
        );
      case "italic":
        return (
          <span key={index} className="italic">
            {token.value}
          </span>
        );
      case "link":
        return (
          <a
            key={index}
            href={token.href}
            target={token.external ? "_blank" : undefined}
            rel={token.external ? "noopener noreferrer" : undefined}
            className="text-img-blue hover:underline"
          >
            {token.value}
          </a>
        );
      default:
        return <Fragment key={index}>{token.value}</Fragment>;
    }
  });

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const privacyCopy = getPrivacyPolicyTranslation(language);

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-img-blue mb-8">
          {privacyCopy.title}
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          {renderTokens(privacyCopy.intro)}
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-4 text-gray-700 leading-relaxed">
          {privacyCopy.bulletPoints.map((bullet, index) => (
            <li key={index}>{renderTokens(bullet)}</li>
          ))}
        </ul>

        <p className="mb-6 text-gray-700 leading-relaxed">
          {renderTokens(privacyCopy.withdrawal)}
        </p>

        <p className="text-gray-700 leading-relaxed">
          {renderTokens(privacyCopy.final)}
        </p>

        <div className="mt-12">
          <Link
            to="/"
            className="text-img-blue font-medium hover:underline inline-flex items-center"
          >
            {privacyCopy.backToHome}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
