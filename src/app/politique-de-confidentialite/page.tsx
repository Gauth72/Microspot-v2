'use client';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            Bienvenue sur MicroSpot. Nous nous engageons à protéger la confidentialité de nos utilisateurs. 
            Cette politique détaille comment nous collectons, utilisons et protégeons vos informations personnelles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Informations collectées</h2>
          <div className="ml-4">
            <h3 className="text-xl font-medium mb-2">2.1 Informations du compte</h3>
            <ul className="list-disc ml-6 text-gray-600 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Photo de profil et de couverture (optionnelles)</li>
              <li>Numéro de téléphone (optionnel)</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">2.2 Informations des annonces</h3>
            <ul className="list-disc ml-6 text-gray-600 mb-4">
              <li>Titres et descriptions</li>
              <li>Images des espaces</li>
              <li>Localisation et adresse</li>
              <li>Prix et conditions</li>
              <li>Type d&apos;espace et caractéristiques</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">2.3 Communications</h3>
            <ul className="list-disc ml-6 text-gray-600 mb-4">
              <li>Messages entre utilisateurs</li>
              <li>Notifications système</li>
              <li>Historique des conversations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Utilisation des informations</h2>
          <p className="text-gray-600 mb-4">
            Nous utilisons vos informations pour :
          </p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>Gérer votre compte et vos annonces</li>
            <li>Faciliter la communication entre utilisateurs</li>
            <li>Améliorer nos services et votre expérience</li>
            <li>Assurer la sécurité de la plateforme</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Protection des données</h2>
          <p className="text-gray-600 mb-4">
            Nous mettons en œuvre des mesures de sécurité pour protéger vos informations :
          </p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>Chiffrement des données sensibles</li>
            <li>Accès sécurisé à la base de données</li>
            <li>Hébergement sécurisé des images via Cloudinary</li>
            <li>Authentification sécurisée via NextAuth</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
          <p className="text-gray-600 mb-4">
            Vous disposez des droits suivants concernant vos données :
          </p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>Accès à vos données personnelles</li>
            <li>Rectification des informations inexactes</li>
            <li>Suppression de votre compte et des données associées</li>
            <li>Opposition au traitement de vos données</li>
            <li>Portabilité de vos données</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Conservation des données</h2>
          <p className="text-gray-600 mb-4">
            Nous conservons vos données tant que votre compte est actif. Les messages sont conservés pendant 6 mois.
            Après suppression de votre compte, vos données personnelles sont supprimées sous 30 jours.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
          <p className="text-gray-600 mb-4">
            Pour toute question concernant vos données personnelles, vous pouvez nous contacter via le formulaire
            de contact ou par email à privacy@microspot.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
          <p className="text-gray-600 mb-4">
            Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications
            seront publiées sur cette page avec la date de mise à jour.
          </p>
          <p className="text-gray-500 italic">
            Dernière mise à jour : 2 juin 2025
          </p>
        </section>
      </div>
    </div>
  );
}
