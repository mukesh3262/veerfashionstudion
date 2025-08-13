"use client"

import { useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import LoadingSpinner from "@/components/loading-spinner"

type RouteChangeLoaderProps = {
  children: ReactNode | ((props: { navigate: (url: string) => void }) => ReactNode)
}

export default function RouteChangeLoader({ children }: RouteChangeLoaderProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const navigate = (url: string) => {
    setLoading(true)
    router.push(url)
  }

  return (
    <>
      {loading && <LoadingSpinner />}
      {typeof children === "function" ? children({ navigate }) : children}
    </>
  )
}
