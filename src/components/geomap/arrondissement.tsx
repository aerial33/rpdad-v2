//todo refacto to render canvas dynamic
//todo fetch geojson from the web
import * as d3 from 'd3' // Import de la bibliothèque D3.js pour la manipulation de données et la visualisation

import { useEffect, useRef } from 'react' // Import des hooks React nécessaires

import arronsdissementData from '@/components/geomap/arrondissements-gironde.json' // Import des données géographiques des arrondissements

// Interface définissant la structure des données géographiques
interface GeoData {
  type: 'FeatureCollection' // Type de la collection de données
  features: Array<{
    type: 'Feature'
    properties: { [key: string]: any }
    geometry: {
      type: 'Polygon'
      coordinates: number[][][]
    }
  }>
}

// Interface définissant la structure d'un marqueur
interface Marker {
  name: string // Nom du marqueur
  coordinates: [number, number] // Coordonnées [latitude, longitude]
}

// Interface définissant les props du composant Arrondissement
interface ArrondissementProps {
  // Données géographiques
  width?: number // Largeur du composant
  height?: number // Hauteur du composant
  onMarkerClick?: (marker: Marker) => void // Callback au clic sur un marqueur
}

// Composant principal Arrondissement
export const Arrondissement = ({
  width = 800,
  height = 600,
  onMarkerClick,
}: ArrondissementProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  // Données des marqueurs
  const markers: Marker[] = [
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
  ]

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)

    // Nettoyer le SVG
    svg.selectAll('*').remove()

    // Configuration du SVG
    svg.attr('width', width).attr('height', height).attr('viewBox', `0 0 ${width} ${height}`)

    // Ajouter les définitions pour les filtres et dégradés
    const defs = svg.append('defs')

    // Dégradés pour les différentes zones utilisant château, picton-blue et flamingo

    // Dégradé Château (vert/turquoise)
    const chateauGradient = defs
      .append('linearGradient')
      .attr('id', 'chateauGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%')

    chateauGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'oklch(96% 0.0149 158.25)') // chateau-lightest
      .attr('stop-opacity', 0.8)

    chateauGradient
      .append('stop')
      .attr('offset', '50%')
      .attr('stop-color', 'oklch(73.92% 0.1111 153.06)') // chateau-light
      .attr('stop-opacity', 0.85)

    chateauGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'oklch(63.73% 0.1516 150.05)') // chateau-base
      .attr('stop-opacity', 0.9)

    // Dégradé Picton Blue (bleu)
    const pictonBlueGradient = defs
      .append('linearGradient')
      .attr('id', 'pictonBlueGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%')

    pictonBlueGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'oklch(96.64% 0.0135 226.56)') // picton-blue-lightest
      .attr('stop-opacity', 0.8)

    pictonBlueGradient
      .append('stop')
      .attr('offset', '50%')
      .attr('stop-color', 'oklch(77.52% 0.0951 231.52)') // picton-blue-light
      .attr('stop-opacity', 0.85)

    pictonBlueGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'oklch(69.08% 0.1274 235.31)') // picton-blue
      .attr('stop-opacity', 0.9)

    // Dégradé Flamingo (orange)
    const flamingoGradient = defs
      .append('linearGradient')
      .attr('id', 'flamingoGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%')

    flamingoGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'oklch(96.12% 0.0179 48.53)') // flamingo-lightest
      .attr('stop-opacity', 0.8)

    flamingoGradient
      .append('stop')
      .attr('offset', '50%')
      .attr('stop-color', 'oklch(75.63% 0.1339 45.75)') // flamingo-light
      .attr('stop-opacity', 0.85)

    flamingoGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'oklch(67.59% 0.1886 42.04)') // flamingo
      .attr('stop-opacity', 0.9)

    // Dégradés pour les marqueurs selon les zones

    // Marqueurs Château (zone ouest)
    const markerChateauGradient = defs
      .append('radialGradient')
      .attr('id', 'markerChateauGradient')
      .attr('cx', '30%')
      .attr('cy', '30%')

    markerChateauGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'oklch(92.27% 0.0307 155.95)') // chateau-lighter

    markerChateauGradient
      .append('stop')
      .attr('offset', '70%')
      .attr('stop-color', 'oklch(63.73% 0.1516 150.05)') // chateau-base

    markerChateauGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'oklch(54.13% 0.1275 150.16)') // chateau-dark

    // Marqueurs Picton Blue (zone nord)
    const markerPictonGradient = defs
      .append('radialGradient')
      .attr('id', 'markerPictonGradient')
      .attr('cx', '30%')
      .attr('cy', '30%')

    markerPictonGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'oklch(93.32% 0.0277 229.17)') // picton-blue-lighter

    markerPictonGradient
      .append('stop')
      .attr('offset', '70%')
      .attr('stop-color', 'oklch(69.08% 0.1274 235.31)') // picton-blue

    markerPictonGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'oklch(58.5% 0.107 235.23)') // picton-blue-dark

    // Marqueurs Flamingo (zone sud/est)
    const markerFlamingoGradient = defs
      .append('radialGradient')
      .attr('id', 'markerFlamingoGradient')
      .attr('cx', '30%')
      .attr('cy', '30%')

    markerFlamingoGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'oklch(92.59% 0.0363 48.31)') // flamingo-lighter

    markerFlamingoGradient
      .append('stop')
      .attr('offset', '70%')
      .attr('stop-color', 'oklch(67.59% 0.1886 42.04)') // flamingo

    markerFlamingoGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'oklch(57.18% 0.1579 42.07)') // flamingo-dark

    // Filtre d'ombre portée pour les marqueurs
    const dropShadow = defs
      .append('filter')
      .attr('id', 'dropShadow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%')

    dropShadow
      .append('feDropShadow')
      .attr('dx', 2)
      .attr('dy', 2)
      .attr('stdDeviation', 3)
      .attr('flood-color', 'rgba(0,0,0,0.2)')

    // Filtre de brillance pour l'effet hover
    const glow = defs
      .append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%')

    const feGaussianBlur = glow
      .append('feGaussianBlur')
      .attr('stdDeviation', 4)
      .attr('result', 'coloredBlur')

    const feMerge = glow.append('feMerge')
    feMerge.append('feMergeNode').attr('in', 'coloredBlur')
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic')

    const geoData = arronsdissementData as unknown as GeoData

    // Configuration de la projection
    const projection = d3.geoMercator().fitSize([width, height], geoData)
    const path = d3.geoPath().projection(projection)

    // Fonction pour déterminer la couleur selon la position géographique
    const getAreaColor = (feature: any) => {
      const bounds = d3.geoBounds(feature)
      const centerLon = (bounds[0][0] + bounds[1][0]) / 2
      const centerLat = (bounds[0][1] + bounds[1][1]) / 2

      // Zone Nord (Blaye, Médoc) - Picton Blue
      if (centerLat > 44.9) {
        return 'url(#pictonBlueGradient)'
      }
      // Zone Ouest (Bassin d'Arcachon, côte) - Château
      else if (centerLon < -0.7) {
        return 'url(#chateauGradient)'
      }
      // Zone Sud et Est - Flamingo
      else {
        return 'url(#flamingoGradient)'
      }
    }

    // Dessiner les arrondissements avec couleurs différenciées
    svg
      .selectAll('path')
      .data(geoData.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', (d) => getAreaColor(d))
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2)
      .attr('opacity', 0.9)
      .style('transition', 'all 0.3s ease')

    // Ajouter les marqueurs avec design moderne
    const markerGroup = svg.append('g').attr('class', 'markers')

    // Groupe pour les labels des villes
    const labelGroup = svg.append('g').attr('class', 'city-labels')

    markerGroup
      .selectAll('g')
      .data(markers)
      .enter()
      .append('g')
      .attr('transform', (d) => {
        const coords = projection([d.coordinates[1], d.coordinates[0]])
        const x = coords ? coords[0] : 0
        const y = coords ? coords[1] : 0
        return `translate(${x}, ${y})`
      })
      .style('cursor', 'pointer')
      .each(function (d) {
        const group = d3.select(this)

        // Déterminer la couleur du marqueur selon sa position
        const getMarkerColor = (marker: Marker) => {
          const lat = marker.coordinates[0]
          const lon = marker.coordinates[1]

          // Zone Nord (Blaye, Médoc) - Picton Blue
          if (lat > 44.9) {
            return {
              gradient: 'url(#markerPictonGradient)',
              halo: 'oklch(77.52% 0.0951 231.52)', // picton-blue-light
            }
          }
          // Zone Ouest (Bassin d'Arcachon, côte) - Château
          else if (lon < -0.7) {
            return {
              gradient: 'url(#markerChateauGradient)',
              halo: 'oklch(73.92% 0.1111 153.06)', // chateau-light
            }
          }
          // Zone Sud et Est - Flamingo
          else {
            return {
              gradient: 'url(#markerFlamingoGradient)',
              halo: 'oklch(75.63% 0.1339 45.75)', // flamingo-light
            }
          }
        }

        const markerColors = getMarkerColor(d)

        // Cercle extérieur (halo)
        group
          .append('circle')
          .attr('r', 12)
          .attr('fill', markerColors.halo)
          .attr('opacity', 0.3)
          .attr('class', 'marker-halo')

        // Cercle principal
        group
          .append('circle')
          .attr('r', 8)
          .attr('fill', markerColors.gradient)
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 3)
          .attr('filter', 'url(#dropShadow)')
          .attr('class', 'marker-main')

        // Point central
        group
          .append('circle')
          .attr('r', 3)
          .attr('fill', '#ffffff')
          .attr('opacity', 0.9)
          .attr('class', 'marker-center')
      })
      .on('click', function (event, d) {
        console.log('Clic sur:', d.name)
        if (onMarkerClick) {
          onMarkerClick(d)
        }
      })
      .on('mouseover', function (event, d) {
        const group = d3.select(this)

        // Animation du halo
        group.select('.marker-halo').transition().duration(200).attr('r', 16).attr('opacity', 0.5)

        // Animation du cercle principal
        group
          .select('.marker-main')
          .transition()
          .duration(200)
          .attr('r', 10)
          .attr('filter', 'url(#glow)')

        // Animation du point central
        group.select('.marker-center').transition().duration(200).attr('r', 4)

        // Afficher le tooltip
        if (tooltipRef.current) {
          const coords = projection([d.coordinates[1], d.coordinates[0]])
          if (coords) {
            tooltipRef.current.style.display = 'block'
            tooltipRef.current.style.left = `${coords[0] + 15}px`
            tooltipRef.current.style.top = `${coords[1] - 10}px`
            tooltipRef.current.innerHTML = `
              <div class="font-semibold text-sm">${d.name}</div>
            `
          }
        }
      })
      .on('mouseout', function () {
        const group = d3.select(this)

        // Retour à l'état normal
        group.select('.marker-halo').transition().duration(200).attr('r', 12).attr('opacity', 0.3)

        group
          .select('.marker-main')
          .transition()
          .duration(200)
          .attr('r', 8)
          .attr('filter', 'url(#dropShadow)')

        group.select('.marker-center').transition().duration(200).attr('r', 3)

        // Masquer le tooltip
        if (tooltipRef.current) {
          tooltipRef.current.style.display = 'none'
        }
      })

    // Ajouter les labels des villes
    labelGroup
      .selectAll('text')
      .data(markers)
      .enter()
      .append('text')
      .attr('x', (d) => {
        const coords = projection([d.coordinates[1], d.coordinates[0]])
        return coords ? coords[0] : 0
      })
      .attr('y', (d) => {
        const coords = projection([d.coordinates[1], d.coordinates[0]])
        return coords ? coords[1] - 20 : 0
      })
      .attr('text-anchor', 'middle')
      .attr('font-family', 'system-ui, -apple-system, sans-serif')
      .attr('font-size', '11px')
      .attr('font-weight', '600')
      .attr('fill', '#374151')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', '2')
      .attr('paint-order', 'stroke fill')
      .style('pointer-events', 'none')
      .style('user-select', 'none')
      .text((d) => d.name)
      .style('opacity', 0.8)
  }, [width, height, onMarkerClick])

  return (
    <div className="w-full relative">
      <svg ref={svgRef}></svg>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-3 pointer-events-none"
        style={{ display: 'none' }}
      >
        {/* Le contenu sera injecté dynamiquement */}
      </div>
    </div>
  )
}
