// PayloadCMS Media Types et MIME Types
export type MediaMimeType =
  // Images
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/png'
  | 'image/webp'
  | 'image/gif'
  | 'image/svg+xml'
  | 'image/bmp'
  | 'image/tiff'
  // Videos
  | 'video/mp4'
  | 'video/webm'
  | 'video/avi'
  | 'video/mov'
  | 'video/quicktime'
  | 'video/x-msvideo'
  | 'video/3gpp'
  | 'video/x-flv'
  // Audio
  | 'audio/mpeg'
  | 'audio/mp3'
  | 'audio/wav'
  | 'audio/ogg'
  | 'audio/aac'
  | 'audio/webm'
  | 'audio/flac'
  | 'audio/x-ms-wma'

export type MediaCategory = 'image' | 'video' | 'audio' | 'unknown'

// Interface pour les médias PayloadCMS avec mimeType automatique
export interface PayloadMedia {
  id: string
  filename: string
  mimeType: MediaMimeType | string
  filesize: number
  width?: number
  height?: number
  url: string
  alt?: string
}

// Utilitaire pour déterminer la catégorie de média depuis le mimeType
export const getMediaCategoryFromMimeType = (mimeType: string): MediaCategory => {
  if (mimeType.startsWith('image/')) return 'image'
  if (mimeType.startsWith('video/')) return 'video'
  if (mimeType.startsWith('audio/')) return 'audio'
  return 'unknown'
}

// Utilitaire pour déterminer le postType depuis le mimeType
export const getPostTypeFromMimeType = (mimeType: string): 'standard' | 'video' | 'audio' | 'gallery' => {
  const category = getMediaCategoryFromMimeType(mimeType)
  switch (category) {
    case 'video':
      return 'video'
    case 'audio':
      return 'audio'
    case 'image':
    default:
      return 'standard'
  }
}

// Configuration MIME types pour PayloadCMS collections
export const PAYLOAD_MIME_TYPES = {
  images: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'],
  videos: ['video/mp4', 'video/webm', 'video/quicktime'],
  audio: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/aac'],
  all: ['image/*', 'video/*', 'audio/*']
} as const