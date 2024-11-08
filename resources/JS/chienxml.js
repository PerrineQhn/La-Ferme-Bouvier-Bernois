parser = new DOMParser();
chienxml = parser.parseFromString(`
<catalog>
	<chien>
		<photo>cheyenne.jpg</photo>
		<nom>Cheyenne</nom>
		<description>
			<naissance>17 Juin 2020</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF</statut>
			<p>Chienne qui a donné naissance à Diabolo, l'un de nos mâles, elle est bien construite, mais a malheureusement été stérilisée. Très câline, elle a également une très belle fourrure.</p>
		</description>
	</chien>
	
	<chien>
		<photo>shadow.jpg</photo>
		<nom>Shadow</nom>
		<description>
			<naissance>29 Août 2020</naissance>
			<sexe>Mâle</sexe>
			<statut>Non LOF</statut>
			<p>Père de Diabolo, compact, bonne ossature. Caractère doux, très attachant, qui demande beaucoup de caresses.</p>
		</description>
	</chien>
	
	<chien>
		<photo>saphyr.jpg</photo>
		<nom>Saphyr</nom>
		<description>
			<naissance>23 Juillet 2021</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF</statut>
			<p>Saphyr est très attachante, joueuse. Très charismatique, c'est une femelle de gros gabarit avec une fourrure douce.</p>
		</description>
	</chien>
	
	<chien>
		<photo>ruby.jpg</photo>
		<nom>Ruby</nom>
		<description>
			<naissance>22 Septembre 2021</naissance>
			<sexe>Femelle</sexe>
			<statut>Non LOF</statut>
			<p>Femelle très joueuse, très attachante, elle a le plus petit gabarit de notre élevage.</p>
		</description>
	</chien>

	<chien>
		<photo>victoire.jpg</photo>
		<nom>Victoire</nom>
		<description>
			<naissance>11 Mars 2024</naissance>
			<sexe>Femelle</sexe>
			<statut>LOF</statut>
			<p>Femelle très joueuse, très attachante.</p>
		</description>
	</chien>
</catalog>
`, "text/xml");
