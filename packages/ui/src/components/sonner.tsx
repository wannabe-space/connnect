import { Toaster as Sonner } from 'sonner'
import { useTheme } from '../theme-provider'

type ToasterProps = React.ComponentProps<typeof Sonner>

function Toaster() {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="top-center"
      offset={50}
      richColors
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-xl group-[.toaster]:shadow-black/3 group-[.toaster]:data-[type=error]:text-destructive',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
    />
  )
}

export { Toaster }
