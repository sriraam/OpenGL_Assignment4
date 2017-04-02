#version 330 core
out vec4 color;

//in vec3 FragPos;
//in vec4 pos;
//in vec3 normal;

in vec3 result;

  uniform vec3 materialcolor;
  uniform vec3 lightPos; 
  uniform vec3 lightColor;
  uniform vec3 viewPos;


void main(){

 /* Ambient
    float ambientStrength = 1.0f;
    vec3 ambient = ambientStrength * lightColor;
  	
    // Diffuse 
    vec3 norm = normalize(normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;

	vec3 result = (diffuse) * materialcolor;
	*/
   
	  color= vec4(result,1);

//color = vec4(pos.r+.5,pos.g+.5,pos.b+.5,1);
//color=vec4(1,1,1,1);
}
