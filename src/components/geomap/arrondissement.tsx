//todo refacto to render canvas dynamic
//todo fetch geojson from the web
//todo tooltips
import * as d3 from 'd3'

import { useEffect, useState } from 'react'

import arronsdissementData from '@/components/geomap/arrondissements-gironde.json'

interface GeoData {
  type: 'FeatureCollection'
  features: GeoFeature[]
}
interface GeoFeature {
  type: 'Feature'
  id?: string
  properties: { [key: string]: any }
  geometry: {
    type: 'Polygon'
    coordinates: number[][][]
  }
}

// Ajouter une interface pour les données du tooltip
interface TooltipData {
  x: number
  y: number
  content: string
}

interface Marker {
  name: string
  coordinates: [number, number] // latitude, longitude
}

interface ArrondissementProps {
  // Données géographiques
  geoData?: GeoData
  markers?: Marker[]

  // Propriétés d'affichage
  width?: number
  height?: number
  propertyNameField?: string // champ à utiliser pour le nom des arrondissements

  // Couleurs et styles
  baseColors?: string[]
  markerColor?: string
  markerHoverColor?: string
  markerSize?: number

  // Animations
  animateMarkers?: boolean
  animationDelay?: number
  animationDuration?: number

  // Interactivité
  enableTooltip?: boolean
  tooltipClassNames?: string

  // Callbacks
  onMarkerClick?: (marker: Marker) => void
  onAreaClick?: (name: string) => void
}

export const Arrondissement = ({
  // Valeurs par défaut
  geoData = arronsdissementData as unknown as GeoData,
  markers = [
    { name: 'Blanquefort', coordinates: [44.916672, -0.63333] },
    { name: 'Bruges', coordinates: [44.883, -0.61667] },
    { name: 'Eysines', coordinates: [44.883, -0.65] },
    { name: 'Floirac', coordinates: [44.83333, -0.53333] },
    { name: 'Le Bouscat', coordinates: [44.8667, -0.6167] },
    { name: 'Martignas sur Jalles', coordinates: [44.833, -0.76667] },
    { name: 'Landiras', coordinates: [44.5667, -0.41667] },
    { name: 'Saint Macaire', coordinates: [44.5652, -0.226334] },
    { name: "Saint Pierre d'Aurillac", coordinates: [44.57, -0.190465] },
    { name: 'Bazas', coordinates: [44.433, -0.21667] },
    { name: 'Sud Gironde', coordinates: [44.44, -0.3] },
    { name: 'Andernos', coordinates: [44.74, -1.1] },
    { name: 'Ares', coordinates: [44.767, -1.1394] },
    { name: 'Belin-Béliet', coordinates: [44.5, -0.7833] },
    { name: 'Le Barp', coordinates: [44.616, -0.7667] },
    { name: 'Le Teich', coordinates: [44.63, -1.01667] },
    { name: 'Salles', coordinates: [44.55, -0.8667] },
    { name: 'Audenge', coordinates: [44.683, -1] },
    { name: 'Lanton', coordinates: [44.7, -1.03333] },
    { name: 'Blaye', coordinates: [45.1333, -0.662] },
    { name: 'Nérigean', coordinates: [44.833, -0.2667] },
    { name: 'Vayres', coordinates: [44.9, -0.3167] },
    { name: 'Fronsac', coordinates: [44.9167, -0.26667] },
    { name: 'Guîtres', coordinates: [45.033, -0.18333] },
    { name: "Saint Seurin sur l'Isle", coordinates: [45.0167, 0.00166667] },
    { name: 'Sainte Terre', coordinates: [44.8289, -0.11667] },
    { name: 'Castillon la Bataille', coordinates: [44.85, -0.03333] },
    { name: 'Les Rives de la Laurence', coordinates: [44.8833, -0.4167] },
    { name: 'Créon', coordinates: [44.78, -0.35] },
    { name: 'Portes entre-2mers', coordinates: [44.73, -0.263369] },
    { name: 'Cestas', coordinates: [44.73, -0.683] },
    { name: 'Cadaujac', coordinates: [44.75, -0.5333] },
    { name: 'Canéjan', coordinates: [44.7667, -0.633] },
  ],

  width = 1000,
  height = 1000,
  propertyNameField = 'nom',
  baseColors = [
    '#69b3a2',
    '#e8c1a0',
    '#f1e05b',
    '#a1d6e2',
    '#bcbddc',
    '#9ecae1',
    '#fdae61',
    '#abd9e9',
    '#a6bddb',
    '#d9f0d3',
    '#fee8c8',
    '#ffd59a',
    '#e5f5f9',
    '#ffeda0',
    '#f4a582',
    '#92c5de',
  ],
  markerColor = 'red',
  markerHoverColor = 'orange',
  markerSize = 1.5,
  animateMarkers = false,
  animationDelay = 100,
  animationDuration = 300,
  enableTooltip = true,
  tooltipClassNames = 'bg-opacity-80 pointer-events-none absolute z-10 rounded bg-black px-2 py-1 text-white transition-all duration-150',
  onMarkerClick,
  onAreaClick,
}: ArrondissementProps) => {
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null)

  useEffect(() => {
    const svg = d3
      .select('#canvas')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('style', 'max-width: 100%; height: auto;')

    // Nettoyer le SVG si besoin
    svg.selectAll('*').remove()

    const projection = d3.geoMercator().fitSize([width, height], geoData)
    const path = d3.geoPath().projection(projection)

    // Définir les couleurs
    const colorScale = d3
      .scaleOrdinal()
      .domain(geoData.features.map((f) => f.properties[propertyNameField] || ''))
      .range(baseColors)

    // Dessiner les arrondissements
    svg
      .selectAll('path')
      .data(geoData.features)
      .enter()
      .append('path')
      .attr('d', path as any)
      .attr('fill', (d) => {
        const id = d.properties[propertyNameField] || ''
        return colorScale(id) as string
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .on('mouseover', function (event, d) {
        if (!enableTooltip) return

        d3.select(this)
          .attr('fill', function (d) {
            const feature = d as GeoFeature
            const id = feature.properties[propertyNameField] || ''
            return (
              d3
                .color(colorScale(id) as string)
                ?.darker(0.3)
                .toString() || '#000'
            )
          })
          .attr('stroke-width', 2)

        const [x, y] = d3.pointer(event, svg.node())
        setTooltipData({
          x,
          y,
          content: d.properties[propertyNameField] || 'Arrondissement',
        })
      })
      .on('mouseout', function (event, d) {
        if (!enableTooltip) return

        d3.select(this)
          .attr('fill', function (d) {
            const feature = d as GeoFeature
            const id = feature.properties[propertyNameField] || ''
            return colorScale(id) as string
          })
          .attr('stroke-width', 1)

        setTooltipData(null)
      })
      .on('click', function (event: MouseEvent, d: GeoFeature) {
        if (onAreaClick) {
          const name = d.properties[propertyNameField] || d.properties.nom
          console.log('click', name)
          onAreaClick(name)
        }
      })

    // Créer les groupes pour les marqueurs
    if (markers && markers.length > 0) {
      const markerGroups = svg
        .selectAll('.marker-group')
        .data(markers)
        .enter()
        .append('g')
        .attr('class', 'marker-group')
        .attr('transform', (d) => {
          const coords = projection([d.coordinates[1], d.coordinates[0]])
          return coords ? `translate(${coords[0]}, ${coords[1]})` : 'translate(0, 0)'
        })
        .style('opacity', animateMarkers ? 0 : 1)
        .on('mouseover', function (event, d) {
          if (!enableTooltip) return

          d3.select(this).attr('transform', function (d) {
            const datum = d as Marker
            const coords = projection([datum.coordinates[1], datum.coordinates[0]])
            return coords ? `translate(${coords[0]}, ${coords[1]}) scale(1.2)` : 'translate(0, 0)'
          })

          d3.select(this).select('path').attr('fill', markerHoverColor)

          const [x, y] = d3.pointer(event, svg.node())
          setTooltipData({
            x,
            y,
            content: d.name,
          })
        })
        .on('mouseout', function () {
          if (!enableTooltip) return

          d3.select(this).attr('transform', function (d) {
            const datum = d as Marker
            const coords = projection([datum.coordinates[1], datum.coordinates[0]])
            return coords ? `translate(${coords[0]}, ${coords[1]}) scale(2)` : 'translate(0, 0)'
          })

          d3.select(this).select('path').attr('fill', markerColor)

          setTooltipData(null)
        })
        .on('click', function (event, d) {
          if (onMarkerClick) {
            onMarkerClick(d as Marker)
          }
        })

      // Animation d'apparition progressive
      if (animateMarkers) {
        markerGroups
          .transition()
          .delay((d, i) => i * animationDelay)
          .duration(animationDuration)
          .style('opacity', 1)
      }

      // Icônes SVG personnalisées
      markerGroups
        .append('path')
        .attr('d', 'M0 0 C-5 -12 5 -12 0 0 M 0 -12 a 6 6 0 1 1 0 -0.1')
        .attr('fill', markerColor)
        .attr('stroke', '#333')
        .attr('stroke-width', 1)
        .attr('transform', `scale(${markerSize})`)
    }
  }, [
    geoData,
    markers,
    width,
    height,
    propertyNameField,
    baseColors,
    markerColor,
    markerHoverColor,
    markerSize,
    animateMarkers,
    animationDelay,
    animationDuration,
    enableTooltip,
    onMarkerClick,
    onAreaClick,
  ])

  return (
    <div className="relative h-auto">
      <svg id="canvas"></svg>
      {enableTooltip && tooltipData && (
        <div className={tooltipClassNames}>{tooltipData.content}</div>
      )}
    </div>
  )
}
