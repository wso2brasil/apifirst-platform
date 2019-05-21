# Spring PetClinic Aplicação Monolítica
Esse passo a passo foi validado utilizando um MacBook OS High Sierra 10.13.6, é possível que precise de algum ajuste para rodar em outro sistema operacional, principalmente Windows. Caso queira contribuir com um passo a passo Windows, ficaremos muito gratos por seu Pull Request.

## Como rodar essa aplicação?
Petclinic é uma aplicação Spring Boot [Spring Boot](https://spring.io/guides/gs/spring-boot) que utiliza [Maven](https://spring.io/guides/gs/maven/). É possível criar um .jar e rodá-lo da seguinte forma: 

### Primeiro é necessário levantar o banco de dados da demonstração

docker run -p 3306:3306 --name mysql-petclinic wso2brasil/apifirst-platform:mysql

Caso já tenha criado o container, basta executar 

```
docker start mysql-petclinic
```

### Agora basta gerar o .jar e executar a aplicação

```
git clone https://github.com/wso2brasil/apifirst-platform.git
cd spring-petclinic
./mvnw package
java -jar -Dspring.profiles.active=mysql target/spring-petclinic-2.1.0.BUILD-SNAPSHOT.jar
```

Acesse a aplicação por esse link: http://localhost:8080/

Esse projeto é baseado numa iniciativa muito bacana. Abaixo o link para os projetos originais:

Spring Petclinic [spring-petclinic]: https://github.com/spring-projects
