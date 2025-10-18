import { Ticket } from '@/types/ticket';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Clock, AlertCircle } from 'lucide-react';

interface TicketCardProps {
  ticket: Ticket;
  onClick: () => void;
}

const statusColors = {
  open: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
  'in-progress': 'bg-amber-500/10 text-amber-700 border-amber-500/20',
  resolved: 'bg-green-500/10 text-green-700 border-green-500/20',
  closed: 'bg-gray-500/10 text-gray-700 border-gray-500/20',
};

const priorityColors = {
  low: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
  medium: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
  high: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
  urgent: 'bg-red-500/10 text-red-700 border-red-500/20',
};

export const TicketCard = ({ ticket, onClick }: TicketCardProps) => {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{ticket.title}</CardTitle>
          <Badge className={priorityColors[ticket.priority]} variant="outline">
            {ticket.priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{ticket.description}</p>
        <div className="flex items-center justify-between">
          <Badge className={statusColors[ticket.status]} variant="outline">
            {ticket.status}
          </Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {new Date(ticket.createdAt).toLocaleDateString()}
          </div>
        </div>
        {ticket.assignedToName && (
          <div className="text-sm text-muted-foreground">
            Assigned to: <span className="font-medium">{ticket.assignedToName}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
