import ProfileForm from './ProfileForm'

interface IProfileSection {}

const ProfileSection: React.FC = (): JSX.Element => {
  return (
    <section className={`bg-gray-7 px-10 pb-20 pt-10`}>
      <div className="container">
        <h1 className="mb-7 text-2xl font-bold text-gray-2">Profile</h1>
        <ProfileForm />
      </div>
    </section>
  )
}

export default ProfileSection
