import HeroSection from '@/components/sections/HeroSection'
import TextSection from '@/components/sections/TextSection'
import ImageTextSection from '@/components/sections/ImageTextSection'
import VideoSection from '@/components/sections/VideoSection'
import ClientLogosSection from '@/components/sections/ClientLogosSection'
import WarumDDoC from '@/components/sections/WarumDDoC'
import GrafikenSection from '@/components/sections/GrafikenSection'
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection'
import ContactCTASection from '@/components/sections/ContactCTASection'
import { content } from '@/data/content'

export default function Home() {
  const { sections } = content.home

  return (
    <>
      <HeroSection />
      {sections.map((section, index) => {
        if (section.type === 'text') {
          return (
            <TextSection
              key={index}
              title={section.title || ''}
              content={section.content || ''}
              centered={'centered' in section ? (section as { centered: boolean }).centered : false}
              backgroundColor={section.backgroundColor || 'white'}
            />
          )
        }
        if (section.type === 'imageText') {
          return (
            <ImageTextSection
              key={index}
              title={section.title || ''}
              content={section.content || ''}
              imagePosition={'imagePosition' in section ? (section as { imagePosition: 'left' | 'right' }).imagePosition : 'left'}
              backgroundColor={section.backgroundColor || 'white'}
            />
          )
        }
        if (section.type === 'customVideo') {
          return (
            <VideoSection
              key={index}
              title={section.title || ''}
              content={section.content || ''}
              backgroundColor={section.backgroundColor || 'white'}
            />
          )
        }
        if (section.type === 'clientLogos') {
          return (
            <ClientLogosSection
              key={index}
              title={section.title || ''}
              backgroundColor={section.backgroundColor || 'white'}
            />
          )
        }
        if (section.type === 'warumDDoC') {
          return (
            <WarumDDoC
              key={index}
              title={section.title || ''}
              content={section.content || ''}
              backgroundColor={section.backgroundColor || 'white'}
            />
          )
        }
        if (section.type === 'servicesOverview') {
          return (
            <ServicesOverviewSection
              key={index}
              title={section.title || ''}
              backgroundColor={section.backgroundColor || 'white'}
            />
          )
        }
        if (section.type === 'grafiken') {
          return (
            <GrafikenSection
              key={index}
              title={section.title || ''}
              backgroundColor={section.backgroundColor || 'white'}
              variant="homepage"
            />
          )
        }
        if (section.type === 'contactCTA') {
          return (
            <ContactCTASection
              key={index}
              backgroundColor={section.backgroundColor || 'white'}
            />
          )
        }
        return null
      })}
    </>
  )
}
