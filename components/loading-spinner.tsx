export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-serif text-black mb-2">Veer Fashion</h2>
          <p className="text-gray-600 text-sm">Loading your style...</p>
        </div>
      </div>
    </div>
  )
}
