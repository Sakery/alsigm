//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v@@BUILD_VERSION@@ 
// 	See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// 	Any modifications to this file will be lost upon recompilation of the source schema. 
// 	Generated on: 2011.07.04 en 12:38:50 CEST 
//


package org.notariado.ancert.xml.plusvalias.liquidacion;


/**
 * Java content class for NotarioType complex type.
 * 	<p>The following schema fragment specifies the expected 	content contained within this java content object. 	(defined at file:/C:/Sun/jwsdp-1.5/jaxb/bin/IIVTNU-WS-Ayto.xsd line 1284)
 * <p>
 * <pre>
 * &lt;complexType name="NotarioType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CODIGO" type="{http://ancert.notariado.org/XML/Plusvalias/Liquidacion}CODIGO_NOTARIOType"/>
 *         &lt;element name="NOMBRE" type="{http://ancert.notariado.org/XML/Plusvalias/Liquidacion}NOMBRE_NOTARIOType"/>
 *         &lt;element name="APELLIDO1" type="{http://ancert.notariado.org/XML/Plusvalias/Liquidacion}APELLIDOS_NOTARIOType"/>
 *         &lt;element name="APELLIDO2" type="{http://ancert.notariado.org/XML/Plusvalias/Liquidacion}APELLIDOS_NOTARIOType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 */
public interface NotarioType {


    /**
     * Gets the value of the apellido2 property.
     * 
     * @return
     *     possible object is
     *     {@link java.lang.String}
     */
    java.lang.String getAPELLIDO2();

    /**
     * Sets the value of the apellido2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link java.lang.String}
     */
    void setAPELLIDO2(java.lang.String value);

    /**
     * Gets the value of the nombre property.
     * 
     * @return
     *     possible object is
     *     {@link java.lang.String}
     */
    java.lang.String getNOMBRE();

    /**
     * Sets the value of the nombre property.
     * 
     * @param value
     *     allowed object is
     *     {@link java.lang.String}
     */
    void setNOMBRE(java.lang.String value);

    /**
     * C�digo de �ltimas voluntades. Identifica el notario de forma �nica.
     * 
     * @return
     *     possible object is
     *     {@link java.lang.String}
     */
    java.lang.String getCODIGO();

    /**
     * C�digo de �ltimas voluntades. Identifica el notario de forma �nica.
     * 
     * @param value
     *     allowed object is
     *     {@link java.lang.String}
     */
    void setCODIGO(java.lang.String value);

    /**
     * Gets the value of the apellido1 property.
     * 
     * @return
     *     possible object is
     *     {@link java.lang.String}
     */
    java.lang.String getAPELLIDO1();

    /**
     * Sets the value of the apellido1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link java.lang.String}
     */
    void setAPELLIDO1(java.lang.String value);

}