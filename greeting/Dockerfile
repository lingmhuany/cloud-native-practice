FROM openjdk:8-jdk-alpine
COPY greeting/target/cloud-native-practice-greeting-0.1.0.jar greeting.jar
ENTRYPOINT ["java","-jar","/greeting.jar"]
