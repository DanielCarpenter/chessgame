from channels.generic.websocket import AsyncWebsocketConsumer
import json

class LobbyConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['lobby_name']
        self.room_group_name = 'chess_app_%s' % self.room_name

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        board_data_json = json.loads(text_data)
        board = board_data_json['board']
        
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'board_data',
                'board': board,
            }
        )

    async def board_data(self, event):
        board = event['board']

        await self.send(text_data=json.dumps({
            'board': board,
        }))