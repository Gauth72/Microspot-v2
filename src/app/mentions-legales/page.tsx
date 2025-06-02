'use client';

export default function LegalNotice() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Raison sociale :</strong> MicroSpot SAS
            </p>
            <p>
              <strong>Siège social :</strong> 123 Avenue des Entrepreneurs, 75001 Paris, France
            </p>
            <p>
              <strong>Capital social :</strong> 10 000€
            </p>
            <p>
              <strong>RCS :</strong> Paris B 123 456 789
            </p>
            <p>
              <strong>SIRET :</strong> 123 456 789 00001
            </p>
            <p>
              <strong>N° TVA Intracommunautaire :</strong> FR 12 345678901
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Direction de la publication</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Directeur de la publication :</strong> Jean Dupont
            </p>
            <p>
              <strong>Contact :</strong> direction@microspot.com
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Hébergement</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.
            </p>
            <p>
              <strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              L&apos;ensemble du contenu de ce site (architecture, textes, photos, illustrations) est la propriété 
              exclusive de MicroSpot SAS et est protégé par les lois françaises et internationales relatives 
              à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction totale ou partielle est strictement interdite sans autorisation préalable.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Protection des données personnelles</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général 
              sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de 
              suppression des données vous concernant.
            </p>
            <p>
              <strong>Délégué à la protection des données :</strong> dpo@microspot.com
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Notre site utilise des cookies pour améliorer votre expérience utilisateur. Pour plus d&apos;informations, 
              consultez notre politique de confidentialité.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Crédits</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Conception et développement :</strong> MicroSpot SAS
            </p>
            <p>
              <strong>Technologies utilisées :</strong> Next.js, TypeScript, Tailwind CSS
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Pour toute question concernant le site et ses services :
            </p>
            <p>
              <strong>Email :</strong> contact@microspot.com
            </p>
            <p>
              <strong>Téléphone :</strong> +33 (0)1 23 45 67 89
            </p>
            <p>
              <strong>Adresse :</strong> 123 Avenue des Entrepreneurs, 75001 Paris, France
            </p>
          </div>
          <p className="text-gray-500 italic mt-4">
            Dernière mise à jour : 2 juin 2025
          </p>
        </section>
      </div>
    </div>
  );
}
