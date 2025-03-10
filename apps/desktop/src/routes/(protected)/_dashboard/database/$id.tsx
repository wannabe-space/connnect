import { Button } from '@connnect/ui/components/button'
import { Card } from '@connnect/ui/components/card'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@connnect/ui/components/resizable'
import { ScrollArea } from '@connnect/ui/components/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@connnect/ui/components/select'
import { useWindowSize } from '@react-hookz/web'
import { RiDatabase2Line } from '@remixicon/react'
import { createFileRoute, Outlet, useRouter } from '@tanstack/react-router'
import { PAGE_SCREEN_CLASS } from '~/constants'
import { useConnection, useDatabaseSchemas } from '~/entities/connection'
import { DatabaseTree } from './-components/database-tree'
import { PasswordForm } from './-components/password-form'
import { useDatabaseSchema } from './-hooks/schema'

export const Route = createFileRoute('/(protected)/_dashboard/database/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()
  const { id } = Route.useParams()
  const { data: connection } = useConnection(id)
  const [schema, setSchema] = useDatabaseSchema(id)
  const { data: schemas } = useDatabaseSchemas(connection)
  const { width } = useWindowSize()

  function px(value: number) {
    return value / width * 100
  }

  if (connection.isPasswordExists && !connection.isPasswordPopulated) {
    return <PasswordForm connection={connection} />
  }

  return (
    <ResizablePanelGroup autoSaveId="database-sidebar" className={PAGE_SCREEN_CLASS} direction="horizontal">
      <ResizablePanel defaultSize={px(300)} minSize={px(150)}>
        <Card className="h-full">
          <ScrollArea className="h-full">
            <div className="p-3">
              <Button
                variant="outline"
                className="w-full mb-4"
                onClick={() => router.navigate({ to: '/database/$id/sql', params: { id } })}
              >
                Run SQL
                <RiDatabase2Line />
              </Button>
              <Select value={schema} onValueChange={setSchema}>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue placeholder="Select schema" />
                </SelectTrigger>
                <SelectContent>
                  {schemas?.map(schema => (
                    <SelectItem key={schema.schema_name} value={schema.schema_name}>
                      {schema.schema_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <DatabaseTree connection={connection} schema={schema} />
            </div>
          </ScrollArea>
        </Card>
      </ResizablePanel>
      <ResizableHandle className="w-1" />
      <ResizablePanel defaultSize={80} minSize={50}>
        <Outlet />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
