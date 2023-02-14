package it.unito.taass.diyamonds2.mq;

import it.unito.taass.diyamonds2.model.AnnuncioMateriaPrima;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SenderFornitore {
    private RabbitTemplate rabbitTemplate;

    @Autowired
    public SenderFornitore(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @Value("${spring.rabbitmq.exchange}")
    private String exchange;

    @Value("${spring.rabbitmq.routingkey2}")
    private String routingkey;

    public void send(AnnuncioMateriaPrima annuncioMateriaPrima){
        rabbitTemplate.convertAndSend(exchange,routingkey, annuncioMateriaPrima);
    }
}