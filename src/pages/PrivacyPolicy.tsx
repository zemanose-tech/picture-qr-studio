import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-img-blue mb-8">
          Política de Privacidad
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Al ingresar y enviar su información de contacto (nombre, email, etc.):
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-4 text-gray-700 leading-relaxed">
          <li>
            Usted está aceptando recibir información acerca de los programas de{" "}
            <span className="font-semibold">IMG Academy</span> y otras
            comunicaciones de promociones y mercadeo desde{" "}
            <span className="font-semibold">IMG Academy LLC</span>. Esto nos
            permitirá comunicarnos con usted por email para enviarle
            información, noticias, productos, información de los programas,
            actualizaciones y ofertas especiales.
          </li>
          <li>
            Usted está aceptando que su información sea enviada a nuestro equipo
            en <span className="font-semibold">IMG Academy</span> ubicada en{" "}
            <span className="italic">
              5650 Bollettieri Blvd., Bradenton FL 34210, Estados Unidos de
              América
            </span>
            . Al ingresar y enviar su información de contacto, usted admite la
            transferencia de esta a los Estados Unidos de América para los
            propósitos mencionados anteriormente.
          </li>
          <li>
            Para conocer más acerca de nuestra política de privacidad, por favor
            acceda a:{" "}
            <a
              href="https://www.imgacademy.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-img-blue hover:underline"
            >
              www.imgacademy.com/privacy-policy
            </a>
          </li>
        </ul>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Usted podrá retirar su consentimiento en cualquier momento presionando
          en el botón <span className="italic">“unsubscribe”</span> incluido en
          nuestros emails o enviando su petición al correo:{" "}
          <a
            href="mailto:info@imgacademy.com"
            className="text-img-blue hover:underline"
          >
            info@imgacademy.com
          </a>
        </p>

        <p className="text-gray-700 leading-relaxed">
          Usted admite que ha leído cuidadosamente y entendido el contenido de
          esta aceptación y que a su voluntad está ingresando y enviando su
          información de contacto para los propósitos ya mencionados.
        </p>

        <div className="mt-12">
          <Link
            to="/"
            className="text-img-blue font-medium hover:underline inline-flex items-center"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;