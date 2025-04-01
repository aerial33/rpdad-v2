import { motion } from 'framer-motion'

import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

export const LogoTicker = () => {
  return (
    <>
      <div className="mt-12">
        <Badge variant="outline" className="text-md">
          Nos Partenaires
        </Badge>
      </div>
      <div className="relative overflow-x-hidden p-4">
        <div className="mb-4 flex items-center">
          <LogoList list={logos} duration={70} />
          <LogoList list={logos} duration={70} />
          <LogoList list={logos} duration={70} />
        </div>
      </div>
    </>
  )
}

const LogoList = ({
  list,
  duration = 70,
}: {
  list: { id: number; component: () => React.ReactElement }[]
  duration?: number
}) => {
  return (
    <motion.div
      initial={{ translateX: '0%' }}
      animate={{ translateX: '-100%' }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className="flex gap-12 px-8"
    >
      {list.map(({ id, component: Logo }) => (
        <div key={id} className="flex w-42 items-center text-slate-300">
          <Logo />
        </div>
      ))}
    </motion.div>
  )
}

const departementLogo = () => {
  return <Image src="/img/departemental-gironde.jpg" alt="departement" width={100} height={100} />
}

const arsLogo = () => {
  return <Image src="/img/ars.jpg" alt="ars" width={100} height={100} />
}

const carsatLogo = () => {
  return <Image src="/img/carsat-partenaires.png" alt="carstat" width={200} height={200} />
}

const cnraclLogo = () => {
  return <Image src="/img/cnracl.jpg" alt="cnracl" width={100} height={50} />
}

const direccteLogo = () => {
  return <Image src="/img/direccte-aquitaine.png" alt="direccte" width={100} height={100} />
}
const mdphLogo = () => {
  return <Image src="/img/mdph.png" alt="mdph" width={150} height={150} />
}
const cnsaLogo = () => {
  return <Image src="/img/cnsa.jpg" alt="cnsa" width={150} height={150} />
}
const msaLogo = () => {
  return <Image src="/img/msa.jpg" alt="msa" width={150} height={150} />
}
const unccasLogo = () => {
  return <Image src="/img/unccas.png" alt="unccas" width={150} height={150} />
}
const cpstiLogo = () => {
  return <Image src="/img/cpsti.png" alt="cpsti" width={150} height={150} />
}

const logos = [
  { id: 1, component: departementLogo },
  { id: 2, component: arsLogo },
  { id: 3, component: carsatLogo },
  { id: 4, component: cnraclLogo },
  { id: 5, component: direccteLogo },
  { id: 6, component: mdphLogo },
  { id: 7, component: cnsaLogo },
  { id: 8, component: msaLogo },
  { id: 9, component: unccasLogo },
  { id: 10, component: cpstiLogo },
]
