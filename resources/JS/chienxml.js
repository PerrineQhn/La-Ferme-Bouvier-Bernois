parser = new DOMParser();
chienxml = parser.parseFromString(`
<catalog>
	<chien>
		<photo>victoire2.jpg</photo>
		<nom>Victoire</nom>
		<description>
			<naissance>11 Mars 2024</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF (Parents LOF) - Reproductrice</statut>
			<p>Victoire vient de parents LOF, mais nous avons fait le choix de ne pas l'inscrire puisque nous ne faisons pas de concours. Elle garde néanmoins toutes les qualités de sa lignée. C'est une jeune femelle dynamique et curieuse, qui déborde d'énergie ! Elle passe ses journées à explorer, jouer et nous solliciter pour des câlins. Face aux inconnus, elle garde ses distances au début - une prudence naturelle qui en fait une bonne gardienne - mais dès qu'elle vous connaît, c'est une vraie pot de colle qui cherche constamment le contact. Victoire grandit bien, avec de belles proportions et une bonne ossature qui se développe harmonieusement. Elle apportera beaucoup à notre élevage grâce à ses origines et son tempérament équilibré.</p>
		</description>
	</chien>

	<chien>
		<photo>ruby.jpg</photo>
		<nom>Ruby</nom>
		<description>
			<naissance>22 Septembre 2021</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF - Reproductrice</statut>
			<p>Ruby est notre petite gabarit, mais ne vous y trompez pas, elle a une personnalité immense ! Bien proportionnée et conforme au standard de la race, elle compense sa taille par un tempérament en or. Joueuse infatigable, elle veut toujours participer à tout ce qui se passe à la maison. Avec les visiteurs, elle reste d'abord en retrait pour observer, mais ça ne dure jamais longtemps. Dès qu'elle vous adopte, préparez-vous à l'avoir dans vos pattes en permanence - elle vous suit comme votre ombre ! Sa douceur et sa patience naturelles font d'elle une excellente mère qui transmet son beau caractère à ses petits.</p>
		</description>
	</chien>

	<chien>
		<photo>saphyr.jpg</photo>
		<nom>Saphyr</nom>
		<description>
			<naissance>23 Juillet 2021</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF - Stérilisée</statut>
			<p>Saphyr impressionne par son gabarit imposant et sa présence charismatique. Elle arbore une magnifique fourrure dense et incroyablement douce qui demande un brossage régulier. Stérilisée, elle n'est pas reproductrice mais reste un membre à part entière de notre famille. Saphyr, c'est un mélange détonnant d'énergie débordante et de tendresse absolue. Elle adore jouer et interagir, mais sait aussi se montrer câline quand l'envie lui prend. Les nouvelles têtes la rendent prudente - elle observe, prend ses marques - mais après cette phase d'adaptation, impossible de s'en débarrasser ! Son entente avec les autres chiens est parfaite et elle apporte sa bonne humeur communicative au quotidien.</p>
		</description>
	</chien>

	<chien>
		<photo>ange.jpg</photo>
		<nom>Ange</nom>
		<description>
			<naissance>6 Septembre 2025</naissance>
			<sexe>Mâle</sexe>
			<statut>Non LOF - Jeune mâle</statut>
			<p>Ange, notre petit dernier, grandit à vue d'œil ! À seulement 4 mois, il montre déjà de belles proportions et une ossature qui se développe bien. Son pelage tricolore est superbe. C'est un chiot typique : joueur, curieux, toujours en mouvement, qui découvre la vie avec un enthousiasme débordant. Il veut tout explorer, tout essayer, participer à chaque activité. Face aux inconnus, il hésite encore un peu, prend le temps de regarder avant d'approcher - normal pour son âge. Mais avec nous, c'est un vrai pot de colle câlin qui réclame de l'attention. Il apprend vite au contact des autres chiens de la maison et promet de devenir un beau représentant de notre élevage.</p>
		</description>
	</chien>

	<chien>
		<photo>shadow.jpg</photo>
		<nom>Shadow</nom>
		<description>
			<naissance>29 Août 2020</naissance>
			<sexe>Mâle</sexe>
			<statut>Non LOF - Reproducteur - Décédé 15 Décembre 2025</statut>
			<p>Shadow était le pilier de notre élevage, notre reproducteur principal. Un mâle magnifique avec une construction compacte et équilibrée, et une belle ossature. Ce qui marquait le plus chez lui, c'était sa douceur : patient, affectueux, il savait se faire aimer de tous. Au premier abord, il prenait son temps pour observer les nouvelles personnes avant d'accorder sa confiance, mais une fois le lien créé, il ne vous quittait plus et réclamait sans cesse des caresses. Shadow adorait simplement être près de nous. Sa fidélité et son bon caractère se retrouvent aujourd'hui chez ses descendants. Nous l'avons perdu suite à un arrêt cardiaque, et son absence se fait encore sentir chaque jour.</p>
		</description>
	</chien>

	<chien>
		<photo>cheyenne.jpg</photo>
		<nom>Cheyenne</nom>
		<description>
			<naissance>17 Juin 2020</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF - Partie en 2025</statut>
			<p>Cheyenne n'est plus avec nous depuis cette année, et son départ laisse un grand vide. C'était une belle femelle avec une belle construction et une fourrure douce et épaisse. Ce qu'on retiendra d'elle, c'est avant tout sa douceur et son affection sans limite. Elle passait son temps à chercher notre compagnie et les moments de câlins. Stérilisée pour des raisons de santé, elle a toujours fait partie intégrante de notre famille et nous manque énormément.</p>
		</description>
	</chien>
</catalog>
`, "text/xml");
