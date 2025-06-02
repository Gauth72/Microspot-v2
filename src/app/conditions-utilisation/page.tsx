'use client';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Conditions Générales d&apos;Utilisation</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
          <p className="text-gray-600 mb-4">
            Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;utilisation de la plateforme MicroSpot, 
            accessible via www.microspot.com. MicroSpot est une plateforme de mise en relation entre propriétaires 
            d&apos;espaces commerciaux et personnes recherchant des emplacements pour leurs activités.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Services proposés</h2>
          <div className="ml-4">
            <h3 className="text-xl font-medium mb-2">2.1 Pour les propriétaires</h3>
            <ul className="list-disc ml-6 text-gray-600 mb-4">
              <li>Publication d&apos;annonces pour des emplacements commerciaux</li>
              <li>Gestion des demandes de location</li>
              <li>Communication avec les potentiels locataires</li>
              <li>Mise en ligne de photos et informations sur l&apos;espace</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">2.2 Pour les locataires</h3>
            <ul className="list-disc ml-6 text-gray-600 mb-4">
              <li>Recherche d&apos;emplacements</li>
              <li>Contact avec les propriétaires</li>
              <li>Sauvegarde d&apos;annonces en favoris</li>
              <li>Système de messagerie intégré</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Inscription et compte</h2>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>L&apos;inscription est gratuite et nécessaire pour publier ou contacter</li>
            <li>Les informations fournies doivent être exactes et à jour</li>
            <li>Un seul compte par utilisateur est autorisé</li>
            <li>Le mot de passe doit rester confidentiel</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Publication d&apos;annonces</h2>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>Les annonces doivent être précises et véridiques</li>
            <li>Les photos doivent représenter l&apos;espace réel</li>
            <li>Le prix doit être clairement indiqué</li>
            <li>Les annonces non conformes pourront être supprimées</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Responsabilités</h2>
          <div className="ml-4">
            <h3 className="text-xl font-medium mb-2">5.1 Responsabilité de MicroSpot</h3>
            <ul className="list-disc ml-6 text-gray-600 mb-4">
              <li>Assurer le bon fonctionnement de la plateforme</li>
              <li>Modérer les contenus inappropriés</li>
              <li>Protéger les données personnelles</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">5.2 Responsabilité des utilisateurs</h3>
            <ul className="list-disc ml-6 text-gray-600 mb-4">
              <li>Respecter les présentes conditions</li>
              <li>Fournir des informations exactes</li>
              <li>Ne pas publier de contenus illégaux</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Propriété intellectuelle</h2>
          <p className="text-gray-600 mb-4">
            Le contenu du site (logos, textes, éléments graphiques, vidéos, etc.) est protégé par le droit d&apos;auteur.
            Toute reproduction est strictement interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Modification des CGU</h2>
          <p className="text-gray-600 mb-4">
            MicroSpot se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront
            informés des modifications par email ou notification sur le site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Résiliation</h2>
          <p className="text-gray-600 mb-4">
            MicroSpot se réserve le droit de suspendre ou supprimer un compte en cas de non-respect des CGU,
            après en avoir informé l&apos;utilisateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Loi applicable</h2>
          <p className="text-gray-600 mb-4">
            Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront compétents.
          </p>
          <p className="text-gray-500 italic mt-4">
            Dernière mise à jour : 2 juin 2025
          </p>
        </section>
      </div>
    </div>
  );
}
