parser = new DOMParser();
chienxml = parser.parseFromString(`
<catalog>
	<chien>
		<photo>cheyenne.jpg</photo>
		<nom>Cheyenne</nom>
		<description>
			<naissance>17 Juin 2020</naissance>
			<sexe>Femelle</sexe>
			<p>Chienne qui a donné naissance à Diabolo, l'un de nos males, elle est bien contruite, mais à malheureusement été stérilisé. Très caline, elle a également une très belle fourrure</p>
		</description>
	</chien>
	
	<chien>
		<photo>shadow.jpg</photo>
		<nom>Shadow</nom>
		<description>
			<naissance>29 Août 2020</naissance>
			<sexe>Mâle</sexe>
			<p>Père de Diabolo, compacte, bonne ossature. Caractère doux, très attachant, qui demande beaucoup de caresse.</p>
		</description>
	</chien>
	
	<chien>
		<photo>saphyr.jpg</photo>
		<nom>Saphyr</nom>
		<description>
			<naissance>23 Juillet 2021</naissance>
			<sexe>Femelle</sexe>
			<p>Saphyr est très attachante, joueuse. Très charismatique, c'est une femelle de gros gabarit. Fourrure douce.</p>
		</description>
	</chien>
	
	<chien>
		<photo>diabolo.jpg</photo>
		<nom>Diabolo</nom>
		<description>
			<naissance>19 Septembre 2021</naissance>
			<sexe>Mâle</sexe>
			<p>Fils de Shadow et Cheyenne. Chien très doux, intelligent et joueur, bien dessiné. Il a hérité de la belle fourrure de sa mère et de l'ossature de son père.</p>
		</description>
	</chien>
	
	<chien>
		<photo>ruby.jpg</photo>
		<nom>Ruby</nom>
		<description>
			<naissance>22 Septembre 2021</naissance>
			<sexe>Femelle</sexe>
			<p>Femelle très joueuse, très attachante, elle a le plus petit gabarit de notre élevage.</p>
		</description>
	</chien>
</catalog>
`, "text/xml");
