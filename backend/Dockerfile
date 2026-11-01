
# Etapa 1: Construção da aplicação
FROM eclipse-temurin:21-jdk AS build

WORKDIR /app

# Copia os arquivos do Maven Wrapper
COPY mvnw .
COPY .mvn .mvn/
COPY pom.xml .

# Dá permissão de execução ao Maven Wrapper
RUN chmod +x mvnw

# Verifica a versão do Maven
RUN ./mvnw -version

# Baixa as dependências
RUN ./mvnw dependency:go-offline

# Copia o código-fonte
COPY src ./src

# Compila a aplicação
RUN ./mvnw clean package -DskipTests

# Etapa 2: Execução da aplicação
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
