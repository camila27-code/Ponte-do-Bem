
# Etapa 1: Construção da aplicação
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copia o pom.xml
COPY pom.xml .

# Baixa as dependências
RUN mvn dependency:go-offline

# Copia o código-fonte
COPY src ./src

# Compila a aplicação
RUN mvn clean package -DskipTests

# Etapa 2: Execução da aplicação
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copia o JAR gerado na etapa de construção
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta da aplicação
EXPOSE 8080

# Inicializa o Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]
