package it.unito.taass.diyamonds2.mq;

import it.unito.taass.diyamonds2.model.AnnuncioGioiello;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class Sender {
    private RabbitTemplate rabbitTemplate;

    @Autowired
    public Sender(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @Value("${spring.rabbitmq.exchange}")
    private String exchange;

    @Value("${spring.rabbitmq.routingkey}")
    private String routingkey;

    public void send(AnnuncioGioiello annuncioGioiello){
        rabbitTemplate.convertAndSend(exchange,routingkey, annuncioGioiello);
    }
}