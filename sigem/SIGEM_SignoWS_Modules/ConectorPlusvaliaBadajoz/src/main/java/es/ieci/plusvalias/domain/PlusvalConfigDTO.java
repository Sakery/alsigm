package es.ieci.plusvalias.domain;

// Generated 28-jun-2011 11:25:36 by Hibernate Tools 3.2.4.CR1

/**
 * PlusvalConfigDTO generated by hbm2java
 */
public class PlusvalConfigDTO implements java.io.Serializable
{	
	private static final long serialVersionUID = 7163825643202861191L;
	
	private Integer aniosPrescripcion;
	private Double impExencion;
	private Integer aniosMaxLiquidar;

	public PlusvalConfigDTO()
	{
	}

	public PlusvalConfigDTO(Integer aniosPrescripcion)
	{
		this.aniosPrescripcion = aniosPrescripcion;
	}

	public PlusvalConfigDTO(Integer aniosPrescripcion, Double impExencion, Integer aniosMaxLiquidar)
	{
		this.aniosPrescripcion = aniosPrescripcion;		
		this.impExencion = impExencion;
		this.aniosMaxLiquidar = aniosMaxLiquidar;
	}

	public Integer getAniosPrescripcion()
	{
		return this.aniosPrescripcion;
	}

	public void setAniosPrescripcion(Integer aniosPrescripcion)
	{
		this.aniosPrescripcion = aniosPrescripcion;
	}

	public Double getImpExencion()
	{
		return this.impExencion;
	}

	public void setImpExencion(Double impExencion)
	{
		this.impExencion = impExencion;
	}

	public Integer getAniosMaxLiquidar()
	{
		return this.aniosMaxLiquidar;
	}

	public void setAniosMaxLiquidar(Integer aniosMaxLiquidar)
	{
		this.aniosMaxLiquidar = aniosMaxLiquidar;
	}
}