import type { ErrorComponentProps } from '@tanstack/react-router'
import { Button } from '@connnect/ui/components/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@connnect/ui/components/card'
import { DotPattern } from '@connnect/ui/components/magicui/dot-pattern'
import { ScrollArea } from '@connnect/ui/components/scroll-area'
import { ThemeProvider } from '@connnect/ui/theme-provider'
import { RiAlertLine, RiArrowGoBackLine, RiRefreshLine } from '@remixicon/react'
import { useNavigate } from '@tanstack/react-router'
import { EventsProvider } from './lib/events'

export function ErrorPage({ error, info }: ErrorComponentProps) {
  const navigate = useNavigate()

  return (
    <EventsProvider>
      <ThemeProvider>
        <div className="flex items-center justify-center min-h-screen p-4">
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className="absolute z-10 top-0 left-0 [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
          />
          <div className="relative z-20 w-full max-w-lg">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-destructive/10">
                  <RiAlertLine className="size-8 text-destructive" />
                </div>
                <CardTitle className="text-xl">Something went wrong</CardTitle>
                <CardDescription>
                  An error occurred while rendering this page
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!error.stack && (
                  <ScrollArea className="rounded-md bg-muted p-4 text-sm text-muted-foreground h-[200px]">
                    {error.message}
                  </ScrollArea>
                )}
                {error.stack && (
                  <ScrollArea className="rounded-md bg-muted p-4 text-xs text-muted-foreground h-[200px] font-mono">
                    {error.stack}
                  </ScrollArea>
                )}
                {info?.componentStack && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium mb-2">Component Stack</h3>
                    <ScrollArea className="rounded-md bg-muted p-4 text-xs text-muted-foreground max-h-[200px] font-mono">
                      {info.componentStack}
                    </ScrollArea>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate({ to: '/' })}
                >
                  <RiArrowGoBackLine />
                  Go back
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => window.location.reload()}
                >
                  <RiRefreshLine />
                  Refresh
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </ThemeProvider>
    </EventsProvider>
  )
}
