interface Iloader {}

const Loader: React.FC = (): JSX.Element => {
  return (
    <div className="absolute flex h-[150px] w-[250px] items-center justify-center bg-slate-100 shadow-lg">
      <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-blue-500 ease-linear"></div>
      <div className="ml-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-red-500 ease-linear"></div>
      <div className="ml-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-green-500 ease-linear"></div>
    </div>
  )
}

export default Loader
