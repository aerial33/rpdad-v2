//todo refacto to render canvas dynamic
//todo fetch geojson from the web
//todo tooltips
import * as d3 from 'd3' // Import de la bibliothèque D3.js pour la manipulation de données et la visualisation

import { useEffect, useState } from 'react' // Import des hooks React nécessaires

import arronsdissementData from '@/components/geomap/arrondissements-gironde.json' // Import des données géographiques des arrondissements

// Interface définissant la structure des données géographiques
interface GeoData {
  type: 'FeatureCollection' // Type de la collection de données
  features: GeoFeature[] // Liste des features géographiques
}

// Interface définissant la structure d'une feature géographique
interface GeoFeature {
  type: 'Feature' // Type de la feature
  id?: string // Identifiant optionnel
  properties: { [key: string]: any } // Propriétés de la feature
  geometry: {
    type: 'Polygon' // Type de géométrie
    coordinates: number[][][] // Coordonnées du polygone
  }
}

// Interface pour les données du tooltip
interface TooltipData {
  x: number // Position X du tooltip
  y: number // Position Y du tooltip
  content: string // Contenu du tooltip
  type?: 'marker' | 'area' // Type de tooltip (marqueur ou zone)
  coordinates?: [number, number] // Coordonnées géographiques pour les marqueurs
}

// Interface définissant la structure d'un marqueur
interface Marker {
  name: string // Nom du marqueur
  coordinates: [number, number] // Coordonnées [latitude, longitude]
}

// Interface définissant les props du composant Arrondissement
interface ArrondissementProps {
  // Données géographiques
  geoData?: GeoData // Données géographiques optionnelles
  markers?: Marker[] // Liste des marqueurs optionnelle

  // Propriétés d'affichage
  width?: number // Largeur du composant
  height?: number // Hauteur du composant
  propertyNameField?: string // Champ à utiliser pour le nom des arrondissements

  // Couleurs et styles
  baseColors?: string[] // Couleurs de base pour les arrondissements
  markerColor?: string // Couleur des marqueurs
  markerHoverColor?: string // Couleur des marqueurs au survol
  markerSize?: number // Taille des marqueurs

  // Animations
  animateMarkers?: boolean // Activer l'animation des marqueurs
  animationDelay?: number // Délai d'animation
  animationDuration?: number // Durée d'animation

  // Interactivité
  enableTooltip?: boolean // Activer les tooltips
  tooltipClassNames?: string // Classes CSS pour les tooltips

  // Callbacks
  onMarkerClick?: (marker: Marker) => void // Callback au clic sur un marqueur
  onAreaClick?: (name: string) => void // Callback au clic sur une zone
}

// Composant principal Arrondissement
export const Arrondissement = ({
  // Valeurs par défaut
  geoData = arronsdissementData as unknown as GeoData, // Données géographiques par défaut
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
  width = 1000, // Largeur par défaut
  height = 1000, // Hauteur par défaut
  propertyNameField = 'nom', // Champ de nom par défaut
  baseColors = [
    // Couleurs de base par défaut
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
  markerColor = '#000', // Couleur des marqueurs par défaut
  markerHoverColor = 'orange', // Couleur de survol par défaut
  markerSize = 1.5, // Taille des marqueurs par défaut
  animateMarkers = false, // Animation désactivée par défaut
  animationDelay = 100, // Délai d'animation par défaut
  animationDuration = 300, // Durée d'animation par défaut
  enableTooltip = true, // Tooltips activés par défaut
  tooltipClassNames = 'pointer-events-none absolute z-50 max-w-xs rounded-lg bg-white shadow-xl border border-gray-200 transition-all duration-200 ease-out', // Classes CSS par défaut
  onMarkerClick, // Callback de clic sur marqueur
  onAreaClick, // Callback de clic sur zone
}: ArrondissementProps) => {
  // État pour les données du tooltip
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  // Effet pour initialiser et mettre à jour la carte
  useEffect(() => {
    // Configuration du SVG
    const svg = d3
      .select('#canvas')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('style', 'max-width: 100%; height: auto;')

    // Nettoyage du SVG
    svg.selectAll('*').remove()

    // Ajout des définitions pour les filtres
    const defs = svg.append('defs')

    // Configuration du filtre d'ombre
    const dropShadow = defs
      .append('filter')
      .attr('id', 'drop-shadow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%')

    // Configuration de l'effet d'ombre
    dropShadow
      .append('feDropShadow')
      .attr('dx', 0)
      .attr('dy', 2)
      .attr('stdDeviation', 2)
      .attr('flood-color', 'rgba(0,0,0,0.3)')

    // Configuration du filtre de brillance
    const glow = defs
      .append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%')

    // Configuration de l'effet de brillance
    glow.append('feGaussianBlur').attr('stdDeviation', 3).attr('result', 'coloredBlur')

    const feMerge = glow.append('feMerge')
    feMerge.append('feMergeNode').attr('in', 'coloredBlur')
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic')

    // Configuration de la projection
    const projection = d3.geoMercator().fitSize([width, height], geoData)
    const path = d3.geoPath().projection(projection)

    // Configuration de l'échelle de couleurs
    const colorScale = d3
      .scaleOrdinal()
      .domain(geoData.features.map((f) => f.properties[propertyNameField] || ''))
      .range(baseColors)

    // Dessin des arrondissements
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
      // Gestion des événements de survol
      // .on('mouseover', function (event, d) {
      //   if (!enableTooltip) return

      //   d3.select(this)
      //     .attr('fill', function (d) {
      //       const feature = d as GeoFeature
      //       const id = feature.properties[propertyNameField] || ''
      //       return (
      //         d3
      //           .color(colorScale(id) as string)
      //           ?.darker(0.3)
      //           .toString() || '#000'
      //       )
      //     })
      //     .attr('stroke-width', 2)

      //   const [x, y] = d3.pointer(event, svg.node())
      //   setTooltipData({
      //     x,
      //     y,
      //     content: d.properties[propertyNameField] || 'Arrondissement',
      //   })
      // })
      // Gestion des événements de sortie de survol
      // .on('mouseout', function (event, d) {
      //   if (!enableTooltip) return

      //   d3.select(this)
      //     .attr('fill', function (d) {
      //       const feature = d as GeoFeature
      //       const id = feature.properties[propertyNameField] || ''
      //       return colorScale(id) as string
      //     })
      //     .attr('stroke-width', 1)

      //   setTooltipData(null)
      // })
      // Gestion des événements de clic
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
          const marker = d as Marker
          setTooltipData({
            x: x + 15, // Décalage pour éviter que le tooltip cache le marqueur
            y: y - 10,
            content: marker.name,
            type: 'marker',
            // coordinates: marker.coordinates,
          })
          setIsTooltipVisible(true)
        })
        .on('mouseout', function () {
          if (!enableTooltip) return

          d3.select(this).attr('transform', function (d) {
            const datum = d as Marker
            const coords = projection([datum.coordinates[1], datum.coordinates[0]])
            return coords ? `translate(${coords[0]}, ${coords[1]}) scale(2)` : 'translate(0, 0)'
          })

          d3.select(this).select('path').attr('fill', markerColor)

          setIsTooltipVisible(false)
          // Délai avant de supprimer les données pour permettre l'animation de sortie
          setTimeout(() => setTooltipData(null), 200)
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

      // Icônes SVG personnalisées - Design moderne
      markerGroups
        .append('path')
        .attr(
          'd',
          'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        )
        .attr('fill', markerColor)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .attr('transform', `translate(-12, -22) scale(${markerSize})`)
        .attr('filter', 'url(#drop-shadow)')

      // Ajouter un point central pour plus de visibilité
      markerGroups
        .append('circle')
        .attr('r', 3 * markerSize)
        .attr('fill', '#fff')
        .attr('stroke', markerColor)
        .attr('stroke-width', 2)
        .attr('transform', 'translate(0, -10)')
        .attr('filter', 'url(#glow)')
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
        <div
          className={`${tooltipClassNames} ${
            isTooltipVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-2'
          }`}
          style={{
            left: `${tooltipData.x}px`,
            top: `${tooltipData.y}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          {tooltipData.type === 'marker' ? (
            <div className="p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h3 className="font-semibold text-gray-900 text-sm">{tooltipData.content}</h3>
              </div>
              {tooltipData.coordinates && (
                <div className="text-xs text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Latitude:</span>
                    <span className="font-mono">{tooltipData.coordinates[0].toFixed(4)}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Longitude:</span>
                    <span className="font-mono">{tooltipData.coordinates[1].toFixed(4)}°</span>
                  </div>
                </div>
              )}
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500">Cliquez pour plus d'infos</p>
              </div>
            </div>
          ) : (
            <div className="p-2">
              <span className="text-sm font-medium text-gray-900">{tooltipData.content}</span>
            </div>
          )}
          {/* Flèche du tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200 -mt-1"></div>
          </div>
        </div>
      )}
    </div>
  )
}
