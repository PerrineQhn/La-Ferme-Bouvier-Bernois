parser = new DOMParser();
chien = parser.parseFromString(`
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/catalog">
	<table>
		<xsl:for-each select="chien">
			<tr>
				<td class="photo">
					<img style="width:200px; height:200px;"><xsl:attribute name="src">./resources/pictures/chiens/<xsl:value-of select="photo"/></xsl:attribute>
					</img>
				</td>
				<td class="description" style="text-align:justify;">
					<h4><xsl:value-of select="nom"/></h4>
					<xsl:for-each select="description">
							<p>
								<u>Date de naissance</u> :   <xsl:value-of select="naissance"/>
							</p>							
							<p>
								<u>Sexe</u> :  <xsl:value-of select="sexe"/>
							</p>
							<p>
								<u>Statut</u> :  <xsl:value-of select="statut"/>
							</p>
							<p>
								<xsl:value-of select="p"/>
							</p>	
					</xsl:for-each>
				</td>
			</tr>
		</xsl:for-each>
	</table>
	</xsl:template>
</xsl:stylesheet>
`, "text/xml");
