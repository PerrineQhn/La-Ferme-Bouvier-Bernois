parser = new DOMParser();
chienxml = parser.parseFromString(`
<catalog>
	<chien>
		<photo>shadow.jpg</photo>
		<nom>Shadow</nom>
		<description>
			<naissance>29 Août 2020</naissance>
			<sexe>Mâle</sexe>
			<statut>Non LOF - Reproducteur</statut>
			<p>Shadow est notre mâle reproducteur, le pilier de notre élevage. Physiquement, il a une bonne construction compacte et équilibrée, avec une belle ossature. Son pelage tricolore est bien entretenu. Côté caractère, Shadow est très doux : affectueux, patient et attachant. Comme tout bon Bouvier Bernois, il est naturellement réservé lors des premières rencontres, prenant le temps d'observer et d'accorder sa confiance. Mais une fois celle-ci établie, il devient très attaché et recherche la présence de ceux qu'il aime. Il adore les moments de tendresse et réclame régulièrement des caresses. C'est un chien fidèle qui transmet ses bonnes qualités à sa descendance.</p>
		</description>
	</chien>

	<chien>
		<photo>victoire2.jpg</photo>
		<nom>Victoire</nom>
		<description>
			<naissance>11 Mars 2024</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF (Parents LOF) - Reproductrice</statut>
			<p>Victoire est notre jeune femelle, issue de parents inscrits au LOF (Livre des Origines Français). Nous avons choisi de ne pas l'inscrire car nous ne participons pas aux concours canins, mais elle bénéficie d'une bonne lignée. Encore jeune, elle a de bonnes proportions et une bonne ossature en développement. Son pelage tricolore est bien entretenu. Côté tempérament, Victoire est dynamique, curieuse et pleine d'énergie. Très joueuse, elle adore découvrir de nouvelles choses et interagir avec nous. Comme les autres, elle est méfiante avec les étrangers au début, une qualité qui fait d'elle une bonne gardienne. Cette prudence se transforme vite en attachement une fois la confiance établie : Victoire devient alors très collante et recherche le contact. Elle s'intègre bien dans notre meute et sera une bonne reproductrice, apportant les qualités de ses origines LOF à notre élevage.</p>
		</description>
	</chien>

	<chien>
		<photo>ruby.jpg</photo>
		<nom>Ruby</nom>
		<description>
			<naissance>22 Septembre 2021</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF - Reproductrice</statut>
			<p>Ruby est la plus petite de notre élevage en termes de gabarit, mais elle a une grande personnalité. Elle est bien proportionnée et correspond au standard du Bouvier Bernois. Son pelage tricolore est bien entretenu. Côté caractère, Ruby est très joueuse et pleine d'énergie, elle adore s'amuser et participer aux activités familiales. Comme ses congénères, elle est réservée avec les inconnus au début. Mais une fois en confiance, elle devient très affectueuse et collante, elle vous suivra partout ! Elle est douce et patiente, ce qui fait d'elle une bonne reproductrice pour transmettre son bon tempérament à ses chiots.</p>
		</description>
	</chien>

	<chien>
		<photo>saphyr.jpg</photo>
		<nom>Saphyr</nom>
		<description>
			<naissance>23 Juillet 2021</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF - Stérilisée</statut>
			<p>Saphyr est une femelle au gros gabarit, imposante et charismatique. Sa fourrure est très douce et dense, nécessitant un entretien régulier. Bien qu'elle soit stérilisée, Saphyr reste une membre importante de notre famille. Son tempérament mélange énergie et affection : très joueuse, elle adore les moments de jeu et d'interaction, tout en étant attachante et câline. Prudente avec les nouvelles personnes, elle a besoin d'un temps d'adaptation avant de se détendre. Une fois en confiance, elle devient collante et ne vous quitte plus ! Elle s'entend bien avec les autres chiens et apporte de la joie au quotidien dans notre élevage.</p>
		</description>
	</chien>

	<chien>
		<photo>cheyenne.jpg</photo>
		<nom>Cheyenne</nom>
		<description>
			<naissance>17 Juin 2020</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF - Partie en 2025</statut>
			<p>Cheyenne nous a quittés cette année, mais elle restera dans nos cœurs. C'était une femelle bien construite, avec une bonne ossature. Sa fourrure était dense et douce. Très câline et douce, elle adorait passer du temps en famille et recherchait les caresses. Son caractère affectueux nous manque beaucoup. Elle a été stérilisée pour des raisons de santé, mais a toujours été une membre importante de notre élevage.</p>
		</description>
	</chien>
</catalog>
`, "text/xml");
