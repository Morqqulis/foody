import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './AboutUsPage.module.css'

const foodItems = [
  { name: 'Hamburger', price: 5.9, image: '/About/hamburger.png', rating: 5 },
  { name: 'Sausage Pizza', price: 7.9, image: '/About/sausage-pizza.png', rating: 4 },
  { name: 'Tomato Soup', price: 7.9, image: '/About/tomato-soup.png', rating: 4 },
  { name: 'Papa Coffee', price: 1.4, image: '/About/papa-coffee.png', rating: 5 }
]

const FoodItem = ({ name, price, image, rating }) => (
  <div className={styles.foodItem}>
    <Image className={styles.foodImg} src={image} alt={name} width={132} height={130} />
    <h3 className={styles.foodName}>{name}</h3>
    <p className={styles.star}>{'⭐'.repeat(rating)}</p>
    <p className={styles.foodPrice}>${price}</p>
  </div>
)

const AboutUsPage = () => {
  const t = useTranslations('AboutUs.Metadata')
  return (
    <div className="container">
      <div className={`my-20 flex justify-between p-5`}>
        <div className={styles.aboutUs}>
          <h1 className={styles.aboutUsTitle}>{t('title')}</h1>
          <p className={styles.aboutUsText}>{t('description')}</p>
        </div>
        <div className={styles.foodList}>
          <div className={styles.rotateBack}></div>
          {foodItems.map((item, index) => (
            <FoodItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
