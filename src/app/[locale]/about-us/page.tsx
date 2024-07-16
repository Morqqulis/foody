import Title from '@ui/Title'

interface Ipage {}

const AboutPage: React.FC = (): JSX.Element => {
   return (
      <main>
         <section>
            <Title
               tag={'h1'}
               text={'About Page'}
            />
         </section>
      </main>
   )
}

export default AboutPage
